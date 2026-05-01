
const buildResponse = (message, extra = {}) => ({
  message,
  time: new Date().toISOString(),
  ...extra,
});

module.exports = buildResponse;
