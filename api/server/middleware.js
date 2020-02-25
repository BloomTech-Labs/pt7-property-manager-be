const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

function middleware(app) {
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
}

module.exports = middleware;
