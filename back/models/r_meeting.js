import express from "express";
import {
  deleteMeeting,
  getMeetingdealer,
  getMeetings,
  getMeetinguser,
  insertMeeting,
} from "../controllers/meeting.js";

const router8 = express.Router();

router8.get("/:id", getMeetingdealer);
router8.get("/", getMeetings);
router8.get("/:id", getMeetinguser);
router8.post("/", insertMeeting);
router8.delete("/:id", deleteMeeting);
export default router8;
