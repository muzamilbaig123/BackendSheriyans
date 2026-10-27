const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlenght: 20
    }
})


const NotesModal = mongoose.model("notes", notesSchema);

module.exports = NotesModal;