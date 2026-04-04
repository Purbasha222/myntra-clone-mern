import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { resend } from "../../utils/mailer.js";

export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Enter valid email" });
    }

    let digits = "0123456789";
    let OTP = "";

    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }

    const otpExpiresAt = new Date(Date.now() + 60 * 1000);

    await User.findOneAndUpdate(
      { email },
      { $set: { otp: OTP, otpExpiresAt } },
      { upsert: true, new: true },
    );

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is <b>${OTP}</b>.</h2><p>Valid for 10 minutes.</p>`,
    });
    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (String(otp) !== String(user.otp)) {
      return res.status(400).json({ message: "OTP doesn't match" });
    }

    if (user.otpExpiresAt < Date.now()) {
      return res.status(400).json({ message: "OTP expired!" });
    }

    await User.findOneAndUpdate(
      { email },
      { $set: { otp: null, otpExpiresAt: null, isVerified: true } },
    );

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
