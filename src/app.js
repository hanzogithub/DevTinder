console.log("Starting the new project");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello From the Server!!");
});

app.get("/hello", (req, res) => {
  res.send("Hello From the Server /Hello!!");
});

app.get("/test", (req, res) => {
  res.send("Hello From the Server /Test!!");
});

const n = 7777;
app.listen(n, () => {
  console.log("Server is Successfully listining to port" + n);
});
