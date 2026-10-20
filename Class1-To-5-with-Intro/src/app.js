const express = require("express");
const notesModle = require("./models/note.modal");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World Done!!");
});

app.post("/create", async (req, res) => {
  let { title, description } = req.body;

  let newNote = await notesModle.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "Note Created Succesfully",
    data: newNote,
  });
});

module.exports = app;
