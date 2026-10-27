const express = require("express");
const notesRoute = require("../../NotesApplication/src/routes/note.routes");
const connectDb = require("./config/db");
const cors = require("cors");

const app = express();

app.use(express.json());
connectDb()

app.use(cors({
    origin: "http://localhost:5173/"
}))


// routes
app.use("/notes", notesRoute)


module.exports = app;
