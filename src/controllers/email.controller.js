const emailService = require('../services/email.service');

const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;
    res.send({ msg: 'testing' });
    const mailOptions = {
      from: 'no-reply@domain.com',
      to: email,
      subject: 'Testing Testing',
      html: '<strong>testing</strong>',
    };
    emailService.sendEmail(mailOptions);
  } catch (error) {
    console.log(error);
  }
  return { msg: 'testing' };
};

module.exports = { sendEmail };
