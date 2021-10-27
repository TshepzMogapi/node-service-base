const express = require('express');

const router = new express.Router();

const smsController = require('../controllers/sms.controller');

router.post('/sms/test-sms', smsController.sendSms);

module.exports = router;
