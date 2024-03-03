import express from "express";
import {
  deleteDealer,
  getDealer,
  getDealers,
  insertDealer,
  updateDealer,
} from "../controllers/dealer.js";
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

const router6 = express.Router();

router6.get("/", getDealers);
router6.get("/:id", getDealer);
router6.put("/:id", upload.single("img"), updateDealer);
router6.post("/", upload.single("img"), insertDealer);
router6.delete("/:id", deleteDealer);
export default router6;
