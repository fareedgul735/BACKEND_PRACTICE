import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NM_EMAIL_USER,
    pass: process.env.NM_EMAIL_PW,
  },
});

const sendEmail = async ({ to, subject, text, html }) => {
  await transporter.sendMail({
    from: process.env.NM_EMAIL_USER,
    to,
    subject,
    text,
    html,
  });
};

export default sendEmail;
