const express = require('express');

const app = express();
const port = 3006;

const emailRouter = require('./routes/email.route');

app.use(express.json());

app.use(emailRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
