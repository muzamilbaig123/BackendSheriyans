const express = require("express");
const createNoteCont = require("../controllers/notes.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World Done!!!!!!!!!!!!!!!");
});

router.post("/create", createNoteCont);


module.exports = router;