const createNoteCont = async (req, res) => {
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
}


module.exports = createNoteCont