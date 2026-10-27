const NotesModal = require("../modal/notesSchema");

// Create
const createNoteController = async (req, res) => {
  try {
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
  } catch (e) {
    console.log(`Get Time Error please fix this ${e}`);

    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

// All Notes
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
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

// Single Notes
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
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

// Update Notes

const updateNoteController = async (req, res) => {
  try {
    let notId = req.params.id;
    let body = req.body;

    let updatedNote = await NotesModal.findByIdAndUpdate(notId, body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Updated Successfully",
      data: updatedNote,
    });
  } catch (e) {
    console.log(`Get Time Error please fix this ${e}`);

    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};


const deleteNoteController = async (req, res) => {
  try{
    const noteId = req.params.id;
    const deleteNote = await NotesModal.findByIdAndDelete(noteId);

    return res.status(200).json({
      message: "Deleted Note Succssfully"
    })

  }
  catch(e){
     console.log(`Get Time Error please fix this ${e}`);

    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
}


module.exports = {
  createNoteController,
  allNoteController,
  singleNoteController,
  updateNoteController,
  deleteNoteController
};
