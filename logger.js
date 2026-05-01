// middleware/logger.js
// Logs every incoming request with timestamp, method, and URL

const logger = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`Request received at: ${currentTime}`);
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logger;
