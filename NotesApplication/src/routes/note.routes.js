const express = require("express");
const {
  createNoteController,
  allNoteController,
  singleNoteController,
  updateNoteController,
  deleteNoteController
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/createnote", createNoteController);
router.get("/allnotes", allNoteController);
router.get("/singlenote/:id", singleNoteController);
router.put("/updatenote/:id", updateNoteController);
router.delete("/deletenote/:id", deleteNoteController);

module.exports = router;
