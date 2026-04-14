import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPInput from "./OTPInput";
import { useDispatch } from "react-redux";
import { login } from "../redux/SLice/authSlice";
import { BASE_URL } from "../config";

const OTPForm = () => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [otpSentCount, setOtpSentCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!showOtpInput) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showOtpInput, otpSentCount]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = async (event = null) => {
    if (event) event.preventDefault();
    if (!email) {
      return alert("Please enter your email!");
    }

    setIsSending(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/sendOtp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setShowOtpInput(true);
        setTimeLeft(60);
        setOtpSentCount((prev) => prev + 1);
        setIsSending(false);
      } else {
        alert(data.message);
        setIsSending(false);
      }
    } catch (error) {
      alert("Something went wrong!");
      setIsSending(false);
    }
  };

  const onOtpSubmit = async (otp) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/verifyOtp`, {
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
              disabled={isSending}
              className={`p-2 mt-10 font-bold text-white text-lg bg-pink-500 ${isSending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {isSending ? "Sending OTP..." : "SUBMIT"}
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {email}</p>
          <OTPInput length={4} onOtpSubmit={onOtpSubmit} />
          <p
            className={`text-sm mt-2 ${timeLeft === 0 ? "text-red-500" : "text-gray-500"}`}
          >
            {timeLeft > 0
              ? `OTP expires in ${formatTime(timeLeft)}`
              : "OTP expired! Please request a new one."}
          </p>
          <div className="flex flex-col justify-center">
            {timeLeft === 0 && (
              <button
                onClick={() => handleEmailSubmit()}
                disabled={isSending}
                className={`p-2 mt-3 font-bold text-white text-lg bg-pink-500 ${isSending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              >
                {isSending ? "Sending..." : "Resend OTP"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OTPForm;
