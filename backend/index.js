import dotenv from "dotenv";

import http from "http";

import { Server } from "socket.io";

import connectDB from "./src/db/db.js";

import { app } from "./src/app.js";

dotenv.config({
  path: "./.env",
});



// Create HTTP server
const server =
  http.createServer(app);



// Create Socket.io server
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



// Make io accessible everywhere
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



// Connect DB then start server
connectDB()

  .then(() => {

    server.listen(
      process.env.PORT || 8000,

      () => {

        console.log(
          `Server running on port ${process.env.PORT}`
        );
      }
    );
  })

  .catch((err) => {

    console.log(
      "MongoDB connection failed",
      err
    );
  });