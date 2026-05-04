import nodemailer from "nodemailer";

export const sendOTPEmail = async (toEmail, otp) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    family: 4,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const result = await transporter.sendMail({
      from: `<${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Your OTP Code",
      html: `<p>Your OTP is <strong>${otp}</strong>. It is valid for <strong>10 minutes</strong>.</p>`,
    });

    console.log("Accepted:", result.accepted);
  } catch (error) {
    console.error("Email error:", error.message);
  }
};
