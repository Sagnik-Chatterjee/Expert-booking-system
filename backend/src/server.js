import dotenv from "dotenv";

import http from "http";

import { Server } from "socket.io";

import app from "./app.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();



// Create HTTP Server
const server =
  http.createServer(app);



// Attach Socket.io
const io = new Server(server, {

  cors: {
    origin:
      process.env.CLIENT_URL,

    methods: [
      "GET",
      "POST",
      "PATCH",
    ],
  },
});



// Make io available globally
app.set("io", io);



// Socket connection
io.on(
  "connection",
  (socket) => {

    console.log(
      "Socket connected:",
      socket.id
    );

    socket.on(
      "disconnect",
      () => {

        console.log(
          "Socket disconnected"
        );
      }
    );
  }
);



// IMPORTANT
server.listen(
  process.env.PORT,
  () => {

    console.log(
      `Server running on port ${process.env.PORT}`
    );
  }
);