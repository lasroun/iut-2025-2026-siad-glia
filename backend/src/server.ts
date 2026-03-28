import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();
const app: Application = express();

app.use(cors());
app.use(express.json());

// Routes
import eventRoutes from "../src/routes/event.routes";
//import studentRoutes from "./routes/student.routes";
//import associationRoutes from "./routes/association.routes";

//app.use("/api/students", studentRoutes);
app.use("/api/events", eventRoutes);
//app.use("/api/associations", associationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});