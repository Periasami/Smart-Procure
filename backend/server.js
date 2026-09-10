require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

const app = require("./src/app");
const {
  registerSocketHandlers,
} = require("./src/websocket/socketHandler");

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

registerSocketHandlers(io);

app.set("io", io);

httpServer.listen(PORT, () => {
  console.log(`SmartProcure Backend running on port ${PORT}`);
  console.log("Socket.IO realtime service enabled");
});