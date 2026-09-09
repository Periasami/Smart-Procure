const registerSocketHandlers = (io) => {
  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on("join:centre", (centreId) => {
      if (!centreId) return;

      socket.join(`centre:${centreId}`);

      console.log(
        `Socket ${socket.id} joined centre:${centreId}`
      );
    });

    socket.on("leave:centre", (centreId) => {
      if (!centreId) return;

      socket.leave(`centre:${centreId}`);

      console.log(
        `Socket ${socket.id} left centre:${centreId}`
      );
    });

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
};

const emitQueueUpdate = (io, centreId, data) => {
  io.to(`centre:${centreId}`).emit("queue:update", data);
};

const emitQueuePosition = (io, tokenId, data) => {
  io.emit("queue:position", {
    tokenId,
    ...data,
  });
};

const emitQueueStatus = (io, tokenId, status) => {
  io.emit("queue:status", {
    tokenId,
    status,
  });
};

const emitCentreCongestion = (io, centreId, data) => {
  io.to(`centre:${centreId}`).emit(
    "centre:congestion",
    data
  );
};

const emitTokenCalled = (io, tokenId, data = {}) => {
  io.emit("token:called", {
    tokenId,
    ...data,
  });
};

const emitTokenCompleted = (io, tokenId, data = {}) => {
  io.emit("token:completed", {
    tokenId,
    ...data,
  });
};

module.exports = {
  registerSocketHandlers,
  emitQueueUpdate,
  emitQueuePosition,
  emitQueueStatus,
  emitCentreCongestion,
  emitTokenCalled,
  emitTokenCompleted,
};