import express from "express";
import { getMeetingdealeraccepted } from "../controllers/meeting.js";
import { getpropertiesadmin } from "../controllers/property.js";

const router12 = express.Router();

router12.get("/:id", getMeetingdealeraccepted);
router12.get("/", getpropertiesadmin);

export default router12;
