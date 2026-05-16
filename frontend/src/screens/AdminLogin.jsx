import React from "react";
import { useState } from "react";
import { BASE_URL } from "../config.js";
import { useDispatch } from "react-redux";
import { adminLogin } from "../redux/SLice/adminAuthSlice";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      return alert("Please enter your credentials!");
    }
    try {
      const res = await fetch(`${BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(adminLogin({ token: data.token, email: email }));
        navigate("/admin/dashboard");
      } else {
        alert(data.message);
        setLoading(false);
      }
    } catch (error) {
      alert("Something went wrong!");
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-100">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <div className="w-120 p-5 bg-white mt-5">
        <h1 className="font-bold text-2xl text-gray-700 mb-10">Login</h1>
        <div className="flex flex-col justify-center gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none p-3 border"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none p-3 border"
          />
          <button
            disabled={loading}
            onClick={handleSubmit}
            className={`p-2 font-bold text-white text-lg bg-pink-500 ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
