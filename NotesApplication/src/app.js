const express = require("express");
const notesRoute = require("../../NotesApplication/src/routes/note.routes");
const connectDb = require("./config/db");

const app = express();

app.use(express.json());
connectDb()



// routes
app.use("/notes", notesRoute)


module.exports = app;
