const express = require("express");

const app = express();

app.use(express.json());

const port = 3001;

// ============crud============

// create
let users = [];

app.post("/create", (req, res) => {
  let body = req.body;

  users.push(body);

  res.send("User saved Successully!");
});

// read
app.get("/", (req, res) => {
  res.send(users);
});

// delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let userData = users.filter((value) => value.id !== id);

  users = userData;

  res.send("User deleted successfully", users);
});

// update put me entire object update karta hai but patch me only value update karta hai

// app.put("/update/:id", (req, res) => {
app.patch("/update/:id", (req, res) => {
  let { id } = req.params;

  let body = req.body;

  let updatedUser = users.map((val) =>
    val.id === id ? { ...val, body } : val,
  );

  res.send(updatedUser);
});

app.listen(port, () => {
  console.log("Server is Running Using ExpressJs!");
});
