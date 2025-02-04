const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;
// Corrected customFormat
const customFormat = printf(({ level, message, timestamp, label }) => {
  return `${timestamp}: ${level.toUpperCase()}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'MyApp' }), 
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), 
    customFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' })
  ]
});

module.exports = logger;
