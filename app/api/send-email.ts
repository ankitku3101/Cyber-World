// // pages/api/send-email.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const { firstName, lastName, company, email, phoneNumber, service, message } = req.body;

//     // Create a transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: parseInt(process.env.EMAIL_PORT || '587', 10),
//       secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
//       auth: {
//         user: process.env.EMAIL_USER, // generated ethereal user
//         pass: process.env.EMAIL_PASS, // generated ethereal password
//       },
//     });

//     try {
//       // Send mail with defined transport object
//       await transporter.sendMail({
//         from: `"${firstName} ${lastName}" <${email}>`, // sender address
//         to: process.env.EMAIL_TO, // list of receivers
//         subject: 'New Form Submission', // Subject line
//         text: `Name: ${firstName} ${lastName}\nCompany: ${company}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nLooking For: ${service}\nMessage: ${message}`, // plain text body
//         html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
//                <p><strong>Company:</strong> ${company}</p>
//                <p><strong>Email:</strong> ${email}</p>
//                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
//                <p><strong>Looking For:</strong> ${service}</p>
//                <p><strong>Message:</strong> ${message}</p>`, // html body
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   } else {
//     res.status(405).json({ success: false, error: 'Method not allowed' });
//   }
// };

// export default handler;
