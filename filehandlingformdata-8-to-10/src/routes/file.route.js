import express from "express";
import fileController from "../controllers/file.controller.js";
import { uploads } from "../config/multer.js";


const router = express.Router();

router.post("/pdf", uploads.single("file"), fileController)


export default router;