const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const transporter = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: 'THE.KEY.GOES.HERE',
  })
);

const sendEmail = async (mailOptions) => {
  try {
    // console.log(mailOptions);
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('info');
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendEmail,
};
