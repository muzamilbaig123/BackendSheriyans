const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
const router = require("./routes/register.routes");

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

app.use("/auth", router)


module.exports = app;
