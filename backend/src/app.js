const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const apiRateLimiter = require("./middleware/rateLimiter");
const requestLogger = require("./middleware/requestLogger");

const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const tokenRoutes = require("./routes/tokenRoutes");
const queueRoutes = require("./routes/queueRoutes");

const app = express();

app.use(requestLogger);

app.use(helmet());

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api/v1", apiRateLimiter);

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "SmartProcure Backend",
    status: "healthy",
  });
});

app.use("/api/v1", testRoutes);

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/prediction", predictionRoutes);

app.use("/api/v1/tokens", tokenRoutes);

app.use("/api/v1/queue", queueRoutes);

app.use(notFound);

app.use(errorHandler);

module.exports = app;