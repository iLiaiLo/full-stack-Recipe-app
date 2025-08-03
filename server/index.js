import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/route.js";

const app = express();
dotenv.config();

const PORT = process.env.port;
const URI = process.env.URI;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: "Content-type",
  })
);

app.use("/recipes", router);

mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => console.log(`serveer running on port: ${PORT}`));
  })
  .catch((e) => console.log(e));
