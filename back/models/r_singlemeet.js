import express from "express";
import { getSinglemeeting } from "../controllers/meeting.js";

const router11 = express.Router();

router11.get("/:id", getSinglemeeting);

export default router11;
