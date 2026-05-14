import nodemailer from "nodemailer";

export const sendOTPEmail = async (toEmail, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    family: 4,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
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

// import { Resend } from "resend";

// const resend = new Resend(process.env.API_KEY);

// export const sendOTPEmail = async function (toEmail, otp) {
//   const { data, error } = await resend.emails.send({
//     from: "Myntra <onboarding@resend.dev>",
//     to: [toEmail],
//     subject: "Your OTP",
//     html: `<p>Your OTP is <strong>${otp}</strong>. Valid for 10 minutes.</p>`,
//   });

//   if (error) {
//     return console.error({ error });
//   }

//   console.log({ data });
// };
