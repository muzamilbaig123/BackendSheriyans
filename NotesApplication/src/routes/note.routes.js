const express = require("express");
const {
  createNoteController,
  allNoteController,
  singleNoteController
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/createnote", createNoteController);
router.get("/allnotes", allNoteController);
router.get("/singlenote/:id", singleNoteController);

module.exports = router;
