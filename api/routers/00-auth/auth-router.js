const router = require("express").Router();
const bcrypt = require("bcryptjs");

// Router setup and model import
const User = require("../01-users/users-model");

const Token = require("./token/user-token");

const { validateUser } = require("./validate-user.js");

// Register
router.post("/register", (req, res) => {
  let user = req.body;
  const validateResult = validateUser(user);

  if (validateResult.isSuccessful === true) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    User.addUser(req.body)
      .then(user => res.status(200).json(user))
      .catch(err =>
        res.status(500).json({ error: "Failed to register user", err })
      );
  } else {
    res.status(400).json({
      message: "Invalid user input, see errors for details",
      error: validateResult.errors
    });
  }
});

// Login
router.post("/login", (req, res) => {
  let { email, password } = req.body;

  console.log(email, password);

  User.findBy({ email })
    .first()
    .then(user => {
      console.log(user);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = Token(user);

        res.status(200).json({
          subject: `Hello ${user.email}, here's a token`,
          token
        });
      } else {
        res
          .status(401)
          .json({ message: "Please provide the correct credentials" });
      }
    })
    .catch(err =>
      res.status(500).json({ error: "Failed to login", err: err.message })
    );
});

module.exports = router;
