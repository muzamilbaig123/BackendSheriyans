const express = require("express");
const notesModle = require("./models/note.modal");
const createNoteCont = require("../../NotesApplication/src/controllers/notes.controller");
const router = require("../../NotesApplication/src/routes/note.routes");

const app = express();

app.use(express.json());

app.use("/notes", router)


module.exports = app;
