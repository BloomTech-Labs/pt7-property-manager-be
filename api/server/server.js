// Server Imports
const express = require("express");
const middleware = require("./middleware");

// Router Imports
const authRouter = require("../routers/00-auth/auth-router");
const userRouter = require("../routers/01-users/users-router");
const propertiesRouter = require("../routers/02-properties/properties-router");
const leaseTermsRouter = require("../routers/03-leaseterms/leaseterms-router");
const unitsRouter = require("../routers/04-units/units-router");
const workOrdersRouter = require("../routers/05-workorders/workorders-router");
const paymentsRouter = require("../routers/06-payments/payments-router");

// Server Setup
const server = express();
middleware(server);

// Simple GET request
server.get("/", (req, res) => {
  console.log("It's alive!");
  res.status(200).json({ message: "It's alive!" });
});

// Router Setup
server.use("/auth", authRouter);
server.use("/users", authRouter);
server.use("/properties", propertiesRouter);
// server.use("/lease-terms", leaseTermsRouter);
// server.use("/units", unitsRouter);
// server.use("/work-orders", workOrdersRouter);
// server.use("/payments", paymentsRouter);

module.exports = server;
