import express from "express";
import notesRoute from "./route/notesRoute.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoute);
connectDB().then(() => {
  app.listen(5001, () => {
    console.log("server started on port 5001");
  });
});
