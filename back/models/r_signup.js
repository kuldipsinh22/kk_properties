import express from "express";
import { Signupuser } from "../controllers/user.js";

const router13 = express.Router();

router13.post("/", Signupuser);

export default router13;
