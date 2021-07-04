const emailService = require('../services/email.service');

const sendEmail = async (dto) => {
  try {
    await emailService.sendEmail(dto);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendEmail };
