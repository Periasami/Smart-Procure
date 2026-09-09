const { createClient } = require("redis");

const env = require("./env");

const redisClient = createClient({
  url: env.redisUrl || "redis://localhost:6379",
});

redisClient.on("error", (error) => {
  console.error("Redis Client Error:", error.message);
});

const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }

  console.log("Redis connected successfully");
};

module.exports = {
  redisClient,
  connectRedis,
};