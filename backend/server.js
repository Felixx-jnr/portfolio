const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3001;

const corsOption = {
  origin: "https://portfolio-phi-livid-78.vercel.app/",
};

app.use(cors(corsOption));
dotenv.config();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Yes it is good");
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "uyuoukoh@gmail.com",
      pass: process.env.APP_PASS,
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: "uyuoukoh@gmail.com",
    subject: `Message from ${name}`,
    text: `From: ${email}\n\nMy name is ${name}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("Error sending email");
    } else {
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
