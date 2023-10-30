// serverless-function.js
const express = require('express');
const cors = require('cors');
const { createTransport } = require('nodemailer');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const corsOptions = {
  origin: 'https://kijufi.vercel.app',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Initialize the Nodemailer transporter
const mailUser = process.env.REACT_APP_MAIL_USER;
const mailPass = process.env.REACT_APP_MAIL_PASS;

const transporter = createTransport({
  service: 'Gmail',
  auth: {
    user: mailUser,
    pass: mailPass,
  },
});

console.log('mailUser:', mailUser);
console.log('mailPass:', mailPass);
const port = process.env.REACT_APP_PORT;

app.post('/api/submit', (req, res) => {
  console.log('Received POST request at /api/submit');
  const { name, email, betreff, nachricht } = req.body;

  if (!name || !email || !betreff || !nachricht) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: mailUser,
    to: 'joshbeckdeveloper@gmail.com',
    subject: betreff,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${nachricht}`,
  };

  console.log('Received form data:', req.body);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
      console.error(error.stack);
      return res.status(500).json({ error: 'Email could not be sent' });
    } else {
      console.log('Email sent:', info.response);
      return res.json({ message: 'Form data received and email sent' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
