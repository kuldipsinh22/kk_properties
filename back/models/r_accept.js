import express from "express";
import { getMeetinguser, updateMeeting } from "../controllers/accept_meets.js";

const router9 = express.Router();

router9.get("/:id", getMeetinguser);
router9.put("/:id", updateMeeting);
export default router9;
