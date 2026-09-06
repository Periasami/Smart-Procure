const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Security middleware
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Health check
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "SmartProcure Backend",
    status: "healthy",
  });
});

module.exports = app;