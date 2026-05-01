// utils/response.js
// Utility to build consistent JSON responses across all routes

const buildResponse = (message, extra = {}) => ({
  message,
  time: new Date().toISOString(),
  ...extra,
});

module.exports = buildResponse;
