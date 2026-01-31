// server/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// nodemailer transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// registration route
app.post("/api/register", async (req, res) => {
  const { username, email, password, messageForDeveloper } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to GOA!",
      text: `Hello ${username},\n\nThank you for registering at GOA!`
    });

    // Email to developer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.DEVELOPER_EMAIL,
      subject: "New Registration",
      text: `New user registered:\n\nUsername: ${username}\nEmail: ${email}\nMessage: ${messageForDeveloper || "No message"}`
    });

    res.json({ success: true, message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email sending failed" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
