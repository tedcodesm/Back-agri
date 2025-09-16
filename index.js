import express from "express";
import dotenv from "dotenv";

import authRoutes from "./Routes/AuthRoutes.js"

import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


app.use("/api/auth",authRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});