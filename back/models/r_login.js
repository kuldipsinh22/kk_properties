import express from "express";
import { getAdmin } from "../controllers/admin_login.js";

const router4 = express.Router();

router4.get("/", getAdmin);
export default router4;
