const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlenght: 10,
  },
});

const notesModle = mongoose.model("notes", notesSchema);

module.exports = notesModle;
