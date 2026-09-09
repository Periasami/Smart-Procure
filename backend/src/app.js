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

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const requestLogger = require("./middleware/requestLogger");

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "SmartProcure Backend",
    status: "healthy",
  });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/prediction", predictionRoutes);
app.use("/api/v1/tokens", tokenRoutes);
app.use("/api/v1/centres", centreRoutes);
app.use("/api/v1/schedules", scheduleRoutes);
app.use("/api/v1/recommendations", recommendationRoutes);
app.use("/api/v1/queue", queueRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;