const { format, createLogger, transports } = require('winston');

const { combine, json } = format;

const prodLogger = () => createLogger({
  format: combine(
    format.timestamp(),
    format.errors({ stack: true }),
    json(),
  ),
  defaultMeta: { service: process.env.SERVICE_NAME },
  transports: [
    new transports.Console()
  ],
});

module.exports = prodLogger;
