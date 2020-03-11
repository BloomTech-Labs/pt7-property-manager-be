const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../01-users/users-model");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const id = req.params.id;
  console.log("ID: ", id);

  // GET user at ID
  User.findUserById(id)
    .then(user => {
      if (token) {
        const secret = process.env.JWT_SECRET;

        jwt.verify(token, secret, (err, decodedToken) => {
          if (err) {
            res.status(401).json({ message: "Bad one!", err: err.message });
          } else {
            if (
              decodedToken.subject != id &&
              decodedToken.type.toLowerCase() != "manager"
            ) {
              res.status(400).json({ message: "Wrong user permissions" });
            } else {
              if (decodedToken.type.toLowerCase() === "manager") {
                if (
                  user.role.toLowerCase() === "manager" &&
                  decodedToken.subject != id
                ) {
                  res.status(400).json({
                    message:
                      "You do not have permissions to edit another Manager's profile"
                  });
                } else {
                  next();
                }
              } else {
                next();
              }
            }
          }
        });
      } else {
        res.status(400).json({ message: "No credentials provided" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Error getting user at req.params.id",
        err: err.message
      });
    });
};
