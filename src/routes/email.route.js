const express = require('express');

const router = new express.Router();

const emailController = require('../controllers/email.controller');

router.post('/emails/test-email', emailController.sendEmail);

module.exports = router;
