require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceNumber = process.env.SERVICE_NUMBER;
const client = require('twilio')(accountSid, authToken);

const sendSms = async (smsDto) => {
  console.log(smsDto);
  const res = await client.messages
    .create({
      body: smsDto.message,
      from: serviceNumber,
      to: smsDto.to
    });

  console.log(res);
};
module.exports = { sendSms };
