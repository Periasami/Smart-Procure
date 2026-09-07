const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const apiRateLimiter = require("./middleware/rateLimiter");
const requestLogger = require("./middleware/requestLogger");

const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Request logging
app.use(requestLogger);

// Security middleware
app.use(helmet());

app.use(
  cors({
    origin: "*",
  })
);

// Body parser
app.use(express.json());

// API rate limiting
app.use("/api/v1", apiRateLimiter);

// Health check
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "SmartProcure Backend",
    status: "healthy",
  });
});

// Test routes
app.use("/api/v1", testRoutes);

// Authentication routes
app.use("/api/v1/auth", authRoutes);

// 404 handler
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

module.exports = app;