const env = require("../config/env");

const getMlServiceUrl = () => {
  if (!env.mlServiceUrl) {
    throw new Error("ML_SERVICE_URL is not configured");
  }

  return env.mlServiceUrl;
};

const predictWaitingTime = async (payload) => {
  const baseUrl = getMlServiceUrl();

  // ML service endpoint
  const url = `${baseUrl}/predict/wait-time`;

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),

      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(
        `ML service returned status ${response.status}`
      );
    }

    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
};

module.exports = {
  getMlServiceUrl,
  predictWaitingTime,
};