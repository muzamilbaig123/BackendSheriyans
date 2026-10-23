const NotesModal = require("../modal/notesSchema");

const createNoteController = async (req, res) => {
  let { title, description } = req.body;

  let newNote = await NotesModal.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "Note Created Succesfully",
    data: newNote,
  });
};

const allNoteController = async (req, res) => {
  try {
    let allnotes = await NotesModal.find();

    res.status(200).json({
      message: "All Notes Fetched!",
      success: true,
      data: allnotes,
    });
  } catch (e) {
    console.log(`Get Time Error please fix this ${e}`);
  }
};

const singleNoteController = async (req, res) => {
  try {
    const noteId = req.params.id; 

    let note = await NotesModal.findById(noteId);

    res.status(200).json({
      message: "Fetch Single Note",
      success: true,
      data: note,
    });
  } catch (e) {
    console.log(`Get Time Error please fix this ${e}`);
  }
};


module.exports = {
  createNoteController,
  allNoteController,
  singleNoteController
};
