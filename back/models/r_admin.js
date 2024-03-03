  import express from "express";
  import {
    deleteadmin,
    getadmin,
    getadmins,
    insertadmin,
    updateadmin,
  } from "../controllers/admin.js";
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

  const router = express.Router();

  router.get("/", getadmins);
  router.get("/:id", getadmin);
  router.put("/:id", upload.single("img"), updateadmin);
  router.post("/", upload.single("img"), insertadmin);
  router.delete("/:id", deleteadmin);
  export default router;
