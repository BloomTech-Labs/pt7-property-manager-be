// Server Imports
const express = require("express");
const middleware = require("./middleware");

// Router Imports
const userRouter = require("../routers/01-users");
const propertiesRouter = require("../routers/02-properties");
const leaseTermsRouter = require("../routers/03-leaseterms");
const unitsRouter = require("../routers/04-units");
const workOrdersRouter = require("../routers/05-workorders");
const paymentsRouter = require("../routers/06-payments");

// Server Setup
const server = express();
middleware(server);

// Simple GET request
server.get("/", (req, res) => {
  console.log("It's alive!");
  res.status(200).json({ message: "It's alive!" });
});

// Router Setup
server.use("/users", userRouter);
server.use("/properties", propertiesRouter);
server.use("/lease-terms", leaseTermsRouter);
server.use("/units", unitsRouter);
server.use("/work-orders", workOrdersRouter);
server.use("/payments", paymentsRouter);

module.exports = server;
