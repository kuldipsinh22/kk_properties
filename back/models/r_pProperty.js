import express from "express";
import { getProperty, getproperties } from "../controllers/personalproperty.js";

const router7 = express.Router();

router7.get("/:id", getProperty);
router7.get("/", getproperties);
export default router7;
