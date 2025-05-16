
import nodemailer from 'nodemailer';

export async function sendThankYouEmail(to, name) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // or your SMTP provider
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,     
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  const mailOptions = {
    from: `"Your Company" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Thank You for Contacting Us!',
    html: `
      <p>Hi <strong>${name}</strong>,</p>
      <p>Thank you for Reaching Out! </p>
      <p>We have received your inquiry and will get back to you as soon as possible.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
