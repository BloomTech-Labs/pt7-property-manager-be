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
const app = express();
middleware(app);

// Simple GET request
app.get("/", (req, res) => {
  console.log("It's alive!");
  res.status(200).json({ message: "It's alive!" });
});

// Okta Setup
app.use("/api", authRouter);
app.use("/api/users", authRouter);

// Router Setup
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/properties", propertiesRouter);
// app.use("/lease-terms", leaseTermsRouter);
// app.use("/units", unitsRouter);
// app.use("/work-orders", workOrdersRouter);
// app.use("/payments", paymentsRouter);

module.exports = app;
