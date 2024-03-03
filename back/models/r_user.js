import express from "express";
import {
  deleteuser,
  getuser,
  getusers,
  insertuser,
  updateuser,
} from "../controllers/user.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

const router1 = express.Router();

router1.get("/", getusers);
router1.get("/:id", getuser);
router1.put("/:id", upload.single("img"), updateuser);
router1.post("/", upload.single("img"), insertuser);
router1.delete("/:id", deleteuser);
export default router1;
