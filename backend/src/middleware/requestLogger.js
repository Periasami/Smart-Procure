const logger = require("../utils/logger");

const requestLogger = (req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;

    logger.info("HTTP request", {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: duration,
    });
  });

  next();
};

module.exports = requestLogger;