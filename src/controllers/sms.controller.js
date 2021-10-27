const smsService = require('../services/sms.service');

const sendSms = async (req, res) => {
  try {
    smsService.sendSms(req.body);
    res.send({
      message: 'Done!'
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendSms };
