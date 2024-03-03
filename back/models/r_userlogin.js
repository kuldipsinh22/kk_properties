import express from "express";
import { getUser } from "../controllers/user_login.js";

const router5 = express.Router();

router5.get("/", getUser);
export default router5;
