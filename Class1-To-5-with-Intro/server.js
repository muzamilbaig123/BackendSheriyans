const express = require("express");


const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Yes I Am Home Page")
})

app.get("/products", (req, res) => {

    res.send('i am producrs')

})

// ============crud============

// create
app.post("/create", (req, res) => {
    let body = req.body;


    res.send(body)
})



app.listen(port, () => {
    console.log("Server is Running Using ExpressJs!")
})