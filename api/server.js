const express = require("express");
const middleware = require("./middleware");

const server = express();

middleware(server);

server.get("/", (req, res) => {
  console.log("It's alive!");
  res.status(200).json({ message: "It's alive!" });
});

module.exports = server;
