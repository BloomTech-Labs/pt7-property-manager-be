// Server Imports
const express = require("express");
const middleware = require("./middleware");

// Router Imports
const authRouter = require("../routers/00-auth/auth-router");
const userRouter = require("../routers/01-users/users-router");
const propertiesRouter = require("../routers/02-properties/properties-router");

// Server Setup
const server = express();
middleware(server);

// Simple GET request
server.get("/", (req, res) => {
  console.log("It's alive!");
  res.status(200).json({ message: "It's alive!", documentation: "https://documenter.getpostman.com/view/9266056/SzKZquwm?version=latest" });
});

// Router Setup
server.use("/auth", authRouter);
server.use("/users", userRouter);
server.use("/properties", propertiesRouter);

module.exports = server;
