const express = require("express");
const server = express();
const middleware = require("./middleware");

middleware(server);

server.get("/", (req, res) => {
  console.log("It's alive!");
  res.status(200).json({ message: "It's alive!" });
});

module.exports = server;
