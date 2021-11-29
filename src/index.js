const express = require('express');
const logger = require('./logger');

const app = express();
const port = 3006;

const emailRouter = require('./routes/email.route');
const smslRouter = require('./routes/sms.route');

app.use(express.json());

app.use(emailRouter);
app.use(smslRouter);

app.get('/', (req, res) => {
  logger.info('Health Check');
  res.send('We are up and running');
});

app.post('/pubsub', (req, res) => {
  logger.info('Pub Sub Message Received');
  const base64Obj = Buffer.from(req.body.message.data, 'base64').toString();
  console.log(JSON.parse(base64Obj));
  res.send('Received');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
