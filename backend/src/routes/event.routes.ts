import { Router } from "express";
import { registerToEvent } from "../controllers/event.controller";

const router = Router();

router.post("/register", registerToEvent);

export default router;