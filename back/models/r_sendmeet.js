import express from "express";
import { insertMeeting } from "../controllers/meeting.js";

const router14 = express.Router();

router14.post("/", insertMeeting);

export default router14;
