import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import { userRoute } from "./APIs/UserAPI.js";
import { adminRoute } from "./APIs/AdminAPI.js";
import { authorRoute } from "./APIs/AuthorAPI.js";
import cookieParser from "cookie-parser";
import { commonRoute } from "./APIs/Common-API.js";
import cors from "cors";

config();

const app = exp();

const allowedOrigins = [
  "http://localhost:5173",
  "https://mern-assign-mhz7.vercel.app",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(exp.json());
app.use(cookieParser());

app.use("/user-api", userRoute);
app.use("/author-api", authorRoute);
app.use("/admin-api", adminRoute);
app.use("/common-api", commonRoute);

let isConnected = false;
export const connectDB = async () => {
  if (isConnected) return;
  await connect(process.env.DB_URL);
  isConnected = true;
  console.log("MongoDB connected");
};

app.get("/", (req, res) => {
  res.json({ message: "Blog API is running" });
});

app.use((req, res) => {
  res.status(404).json({ message: `${req.url} is an invalid path` });
});

app.use((err, req, res, next) => {
  console.log(err);

  if (err.name === "ValidationError" || err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }

  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000 && keyValue) {
    const field = Object.keys(keyValue)[0];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} already exists`,
    });
  }

  res.status(err.status || 500).json({
    message: "error occurred",
    error: err.message || "Server side error",
  });
});

export default app;
