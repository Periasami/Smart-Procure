const dotenv = require("dotenv");

dotenv.config();

const env = {
  port: Number(process.env.PORT) || 5000,

  databaseUrl: process.env.DATABASE_URL || "",
  redisUrl: process.env.REDIS_URL || "",

  mlServiceUrl: process.env.ML_SERVICE_URL || "",

  mapsApiKey: process.env.MAPS_API_KEY || "",
  smsApiKey: process.env.SMS_API_KEY || "",
  firebaseConfig: process.env.FIREBASE_CONFIG || "",
  voiceApiKey: process.env.VOICE_API_KEY || "",
  telephonyApiKey: process.env.TELEPHONY_API_KEY || "",

  jwtSecret: process.env.JWT_SECRET || "",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
};

module.exports = env;