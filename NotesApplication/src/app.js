const express = require("express");
const router = require("../../NotesApplication/src/routes/note.routes");
const connectDb = require("./config/db");

const app = express();

app.use(express.json());
connectDb()



// routes
app.use("/", router)
app.use("/create", router)


module.exports = app;
