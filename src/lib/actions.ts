'use server';

import nodemailer from 'nodemailer';

interface Services {
  websiteDevelopment: boolean;
  appDevelopment: boolean;
  designSystem: boolean;
  websiteMigration: boolean;
  ecommerceSite: boolean;
  generalInquiries: boolean;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  location: string;
  budget: string;
  description: string;
  services: Services;
}

export async function sendEmail(formData: FormData) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Cast keys to keyof Services to ensure type safety
  const servicesRequested = (Object.keys(formData.services) as (keyof Services)[])
    .filter((key) => formData.services[key])
    .join(', ');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'sivarajyukash@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Company: ${formData.company}
      Phone: ${formData.phone}
      Location: ${formData.location}
      Services Requested: ${servicesRequested}
      Budget: ${formData.budget}
      Project Description: ${formData.description}
    `,
  };

  await transporter.sendMail(mailOptions);
}
