const env = require("../config/env");

const getMlServiceUrl = () => {
  if (!env.mlServiceUrl) {
    throw new Error("ML_SERVICE_URL is not configured");
  }

  return env.mlServiceUrl;
};

module.exports = {
  getMlServiceUrl,
};