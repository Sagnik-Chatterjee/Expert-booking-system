import express from "express"
import cors from"cors"
import cookieParser from "cookie-parser"
import expertRoutes from "./routes/expert.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js"

const app=express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({extended: true,limit: "16kb"}))

app.use(express.static("public"))

app.use(cookieParser())

app.use((req, res, next) => {
  req.io = app.get("io");
  next();
});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/experts",
  expertRoutes
);

app.use(
  "/api/bookings",
  bookingRoutes
);

app.use(errorHandler);

export{app}

