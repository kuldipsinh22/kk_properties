import express from "express";
import { getMeetingdealeraccepted } from "../controllers/meeting.js";

const router12 = express.Router();

router12.get("/:id", getMeetingdealeraccepted);

export default router12;
