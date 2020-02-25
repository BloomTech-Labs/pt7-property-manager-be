const express = require("express");
const router = express.Router();
const oktaClient = require("./lib/oktaClient.js");

/* Create a new User (register). */
router.post("/register", (req, res, next) => {
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };
  oktaClient
    .createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    });
});

module.exports = router;

// Router setup and model import
// const express = require("express");
// const User = require("../01-users/users-model");
// const router = express.Router();

// router.post("/register", (req, res) => {
//   // Register
//   User.addUser(req.body)
//     .then(user => res.status(200).json(user))
//     .catch(err =>
//       res.status(500).json({ error: "Failed to register user", err })
//     );
// });

// router.post("/login", (req, res) => {
//   // Login
//   let { email, password } = req.body;

//   User.findBy({ email })
//     .first()
//     .then(user => res.status(200).json(user))
//     .catch(err => res.status(500).json({ error: "Failed to login", err }));
// });
