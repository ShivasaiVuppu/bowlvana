import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 5174;

app.use(express.json());

app.use(express.static(path.resolve('dist')));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const hasSmtpConfig = () => {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
};

transporter.verify().then(() => {
  console.log('SMTP transporter is configured correctly.');
}).catch((error) => {
  console.error('SMTP transporter verification failed:', error.message || error);
});

app.post('/api/subscribe', async (req, res) => {
  if (!hasSmtpConfig()) {
    return res.status(500).json({ error: 'Email service is not configured. Please set SMTP credentials in .env.' });
  }
  const { name, email, phone, plan, startDate, address, notes } = req.body;

  if (!name || !email || !phone || !plan || !startDate || !address) {
    return res.status(400).json({ error: 'Missing required subscription fields.' });
  }

  const message = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Plan: ${plan}`,
    `Start date: ${startDate}`,
    `Address: ${address}`,
    `Dietary notes: ${notes || 'None'}`,
  ].join('\n');

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.SUBSCRIPTION_TO || 'vsaishiva99@gmail.com',
    subject: `Bowlvana subscription request from ${name}`,
    text: message,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Subscription request sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Unable to send subscription email.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Subscription API running at http://localhost:${port}`);
});
