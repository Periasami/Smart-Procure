const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const tokenRoutes = require("./routes/tokenRoutes");
const centreRoutes = require("./routes/centreRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const queueRoutes = require("./routes/queueRoutes");
const reschedulingRoutes = require("./routes/reschedulingRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const voiceRoutes = require("./routes/voiceRoutes");
const missedCallRoutes = require("./routes/missedCallRoutes");
const gpsRoutes = require("./routes/gpsRoutes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const requestLogger = require("./middleware/requestLogger");

const app = express();

// ===============================
// Security Middleware
// ===============================

app.use(helmet());
app.use(cors());

// ===============================
// Body Parsing Middleware
// ===============================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// Request Logger
// ===============================

app.use(requestLogger);

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
// API Routes
// ===============================

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/prediction", predictionRoutes);

app.use("/api/v1/tokens", tokenRoutes);

app.use("/api/v1/centres", centreRoutes);

app.use("/api/v1/schedules", scheduleRoutes);

app.use("/api/v1/recommendations", recommendationRoutes);

app.use("/api/v1/queue", queueRoutes);

app.use("/api/v1/rescheduling", reschedulingRoutes);

app.use("/api/v1/notifications", notificationRoutes);

app.use("/api/v1/voice", voiceRoutes);

app.use("/api/v1/missed-calls", missedCallRoutes);

app.use("/api/v1/gps", gpsRoutes);

// ===============================
// 404 Handler
// ===============================

app.use(notFound);

// ===============================
// Centralized Error Handler
// ===============================

app.use(errorHandler);

// ===============================
// Export App
// ===============================

module.exports = app;