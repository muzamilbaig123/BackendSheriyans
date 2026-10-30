const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");

const app = express();

app.use(express.json());
connectDb()


app.get("/", (req, res) => {
    res.send("Hello")
})

app.use(cors({
    origin: "http://localhost:5173/"
}))


// routes


module.exports = app;
