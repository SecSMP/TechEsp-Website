const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "TechEsp backend is running",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      service,
      message,
    } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone and message are required.",
      });
    }

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New TechEsp Enquiry - ${name}`,
      text: `
New enquiry received from TechEsp website.

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone}
Service: ${service || "Not selected"}

Message:
${message}
      `,
    });

try {
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: email,
    subject: "Thank you for contacting TechEsp",
    text: `Hi ${name},

Thank you for getting in touch with TechEsp.

We have received your enquiry and our team will review it shortly.

We appreciate your interest in TechEsp and will get back to you as soon as possible.

Regards,
TechEsp Team
Technology • Infrastructure • Security`,
  });
} catch (error) {
  console.error("Auto-reply email error:", error);
}

    res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to send enquiry right now.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`TechEsp backend running on http://localhost:${PORT}`);
});
