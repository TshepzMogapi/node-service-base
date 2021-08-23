const path = require('path');
const ejs = require('ejs');
const emailService = require('../services/email.service');

const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const userEmail = email;

    const emailTemplate = await ejs
      .renderFile(path.join(__dirname, '../views/testing.ejs'), {
        confirm_link: `http://localhost:3006/auth?email=${userEmail}`
      });

    const mailOptions = {
      from: 'no-reply@domain.com',
      to: email,
      subject: 'Testing Testing',
      html: emailTemplate,
    };
    res.send({ msg: 'testing' });

    emailService.sendEmail(mailOptions);
  } catch (error) {
    console.log(error);
  }
  return { msg: 'testing' };
};

module.exports = { sendEmail };
