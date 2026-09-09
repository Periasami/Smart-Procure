const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const tokenRoutes = require("./routes/tokenRoutes");
const centreRoutes = require("./routes/centreRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const requestLogger = require("./middleware/requestLogger");

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(requestLogger);

// Health check
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "SmartProcure Backend",
    status: "healthy",
  });
});

// API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/prediction", predictionRoutes);
app.use("/api/v1/tokens", tokenRoutes);
app.use("/api/v1/centres", centreRoutes);
app.use("/api/v1/schedules", scheduleRoutes);
app.use("/api/v1/recommendations", recommendationRoutes);

// 404 handler
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

module.exports = app;