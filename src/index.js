const express = require('express');

const app = express();
const port = 3006;

const emailRouter = require('./routes/email.route');
const smslRouter = require('./routes/sms.route');

app.use(express.json());

app.use(emailRouter);
app.use(smslRouter);

app.get('/', (req, res) => {
  console.log(`+++++++ Hello world ${new Date()}+++++++`);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
