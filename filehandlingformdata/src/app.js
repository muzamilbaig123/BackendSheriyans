import express from "express"
import fileRoute from "./routes/file.route.js";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {

    res.send("Me bich ka bandar")

}, (req, res) => {
    res.send("Hello!!!!!!!!!")
})



app.use("/file", fileRoute)

export default app;