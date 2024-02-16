const express = require("express");
const cors = require("cors")
require('dotenv').config();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


// Define your signup endpoint
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

//   console.log(email, password);

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "scanmgv@gmail.com",
    pass: "wpgv lhga hwfe uklb",
  },
});

transporter.verify(function(error, success) {
  if (error) {
    console.error("Error verifying transporter:", error);
  } else {
    console.log("Transporter is ready to take messages");
  }
});

  // Setup email data
  const mailOptions = {
    // from: "your-email@gmail.com",
    to: "scanmgv@gmail.com",
    subject: "Welcome to our platform",
    html: `
      <h1>Welcome to Our Platform!</h1>
      <p>Thank you for signing up!</p>
      <p>Your Email: ${email}</p>
      <p>Your Password: ${password}</p>
      <p>We're excited to have you on board!</p>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

const port = 5000 
console.log(port);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});