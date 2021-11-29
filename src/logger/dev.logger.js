const { format, createLogger, transports } = require('winston');

const { combine, printf } = format;

const logFormat = printf(({
  level, message, timestamp
}) => `${timestamp} ${level}: ${message}`);

const devLogger = () => createLogger({
  format: combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat,
    format.errors({ stack: true })
  ),
  transports: [
    new transports.Console()
  ],
});

module.exports = devLogger;
