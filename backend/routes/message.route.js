import express from "express";
import { SoloChat } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/chat/:id", protectRoute, SoloChat);


export default router;
