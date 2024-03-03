import express from "express";
import {
  deleteproperty,
  getproperties,
  getproperty,
  insertproperty,
  updateproperty,
  // getDealers,
} from "../controllers/property.js";
import multer from "multer";

const router3 = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

const router2 = express.Router();

router2.get("/", getproperties);
// router2.get("/:id", getDealers);
router2.get("/:id", getproperty);
router2.put("/:id", upload.single("p_img"), updateproperty);
router2.post("/", upload.single("p_img"), insertproperty);
router2.delete("/:id", deleteproperty);
export default router2;
