let http = require("http");

let server = http.createServer((req, res) => {
    console.log("hey!!!")
    res.end()
})


server.listen(3000, () => {
    console.log("server is running")
})