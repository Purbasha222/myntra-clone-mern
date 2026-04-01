import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPInput from "./OTPInput";
import { useDispatch } from "react-redux";
import { login } from "../redux/SLice/authSlice";

const OTPForm = () => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      alert("Please enter your email!");
    }

    try {
      const res = await fetch("http://localhost:8000/auth/sendOtp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setShowOtpInput(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  const onOtpSubmit = async (otp) => {
    try {
      const res = await fetch("http://localhost:8000/auth/verifyOtp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        dispatch(login({ token: data.token, email }));
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      {!showOtpInput ? (
        <form method="post" onSubmit={handleEmailSubmit}>
          <div className="flex flex-col justify-center">
            <input
              type="email"
              ref={inputRef}
              value={email}
              onChange={handleEmail}
              placeholder="Enter Your Email"
              className="outline-none p-3 border"
            />
            <button
              type="submit"
              className="p-2 mt-10 font-bold text-white text-lg bg-pink-500 cursor-pointer"
            >
              SUBMIT
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {email}</p>
          <OTPInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default OTPForm;
