// Router setup and model import
const express = require("express");
const User = require("../01-users/users-model");
const router = express.Router();

router.post("/register", (req, res) => {
  // Register
  User.addUser(req.body)
    .then(user => res.status(200).json(user))
    .catch(err =>
      res.status(500).json({ error: "Failed to register user", err })
    );
});

router.post("/login", (req, res) => {
  // Login
  let { email, password } = req.body;

  User.findBy({ email })
    .first()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ error: "Failed to login", err }));
});
