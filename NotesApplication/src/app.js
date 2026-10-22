const express = require("express");
const connectDb = require("../src/config/db");
const NotesModal = require("../src/modal/notesSchema");

const app = express()
app.use(express.json())

connectDb()

// create 
app.post("/create", async (req, res) => {

    try{

    const { title, description } = req.body;

    const newNote = await NotesModal.create({
        title,
        description
    })

    return res.status(201).json({
        message: "Note Created Successfully",
        data: newNote
    })


    }catch(e){
        console.log(`Pease fix this error ${e}`)
    }

});


app.get("/", (req, res) => {
    res.send("Geting")
})





module.exports = app