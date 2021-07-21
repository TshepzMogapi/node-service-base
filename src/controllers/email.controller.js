const emailService = require('../services/email.service');

const sendEmail = async (req, res) => {
  try {
    res.send({ msg: 'testing' });
    const mailOptions = {
      from: 'from',
      to: 'email@test.com',
      subject: 'Testing Testing',
      text:
        `${'Hello'
        + ',\n\n'
        + 'We are testing \n'
        + 'domain.com'
        + '?token='}${
          'token.token'
        }\n\nThank You!\n`,
    };
    emailService.sendEmail(mailOptions);
  } catch (error) {
    console.log(error);
  }
  return { msg: 'testing' };
};

module.exports = { sendEmail };
