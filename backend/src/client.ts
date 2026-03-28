import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.resolve(__dirname, "..", ".env"),
});

const DATABASE_URL = process.env.DATABASE_URL;

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(DATABASE_URL as string),
});

export default prisma;