/*

const express = require("express");

const app = express();

app.use(express.json());

const port = 3001;

let users = [];

// Home page
app.get("/", (req, res) => {
  res.send("Yes I Am Home Page");
});

// Create
app.post("/create", (req, res) => {
  let body = req.body;

  users.push(body);

  res.send("Users Created Successfully!");
});

// Read
app.get("/users", (req, res) => {
  res.send(users);
});

// Update
app.patch("/update/:id", (req, res) => {
  let { id } = req.params;
  let body = req.body;

  users = users.map((val) =>
    val.id === id ? { ...val, ...body } : val
  );

  res.send(users);
});

// Delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  users = users.filter((val) => val.id !== id);

  res.send("User deleted successfully!");
});

// Server
app.listen(port, () => {
  console.log("Server is Running Using ExpressJs!");
});

 */
