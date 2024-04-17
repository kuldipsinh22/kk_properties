import express from "express";
import { getMeetingdealer } from "../controllers/meeting.js";

const router10 = express.Router();

router10.get("/:id", getMeetingdealer);

export default router10;
