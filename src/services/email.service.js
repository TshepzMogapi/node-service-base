const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
require('dotenv').config();

const transporter = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SEND_GRID_KEY,
  })
);

const sendEmail = async (mailOptions) => {
  try {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Something happened');
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendEmail,
};
