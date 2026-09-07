const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const apiRateLimiter = require("./middleware/rateLimiter");

const testRoutes = require("./routes/testRoutes");

const app = express();

// ===============================
// Security Middleware
// ===============================

app.use(helmet());

app.use(
  cors({
    origin: "*",
  })
);

// Parse JSON request bodies
app.use(express.json());

// ===============================
// Rate Limiting
// ===============================

app.use("/api/v1", apiRateLimiter);

// ===============================
// Health Check
// ===============================

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "SmartProcure Backend",
    status: "healthy",
  });
});

// ===============================
// Test / Validation Routes
// ===============================

app.use("/api/v1", testRoutes);

// ===============================
// 404 Handler
// ===============================

app.use(notFound);

// ===============================
// Centralized Error Handler
// ===============================

app.use(errorHandler);

module.exports = app;