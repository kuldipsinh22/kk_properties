import express from "express";
import { getproperty } from "../controllers/personalproperty.js";

const router7 = express.Router();

router7.get("/", getproperty);
export default router7;
