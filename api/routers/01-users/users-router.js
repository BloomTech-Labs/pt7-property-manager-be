const express = require("express");

const Manager = require("./users-model.js");
const Renter = require("./users-model.js");
const User = require("./users-model.js");

const router = express.Router();

// ALL USER

router.post("/user/register", (req, res) => {
  User.addUser(req.body)
    .then(user => res.status(200).json(user))
    .catch(err =>
      res.status(500).json({ error: "Failed to register user", err })
    );
});

router.post("/user/login", (req, res) => {
  let { email, password } = req.body;

  User.findAllUser({ email })
    .first()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ error: "Failed to login", err }));
});

router.get("/users", (req, res) => {
  User.findAllUser()
    .then(users => {
      res.json(users);
    })
    .catch(err =>
      res.status(500).json({ error: "Failed to get all users", err })
    );
});

// MANAGER
router.get("/manager/:id", (req, res) => {
  const { id } = req.params;
  Manager.findByManagerId(id)
    .then(manager => {
      res.status(200).json(manager);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get manager", err });
    });
});

router.put("/manager/:id", (req, res) => {
  Manager.findByManagerId(req.params.id)
    .then(manager => {
      if (manager) {
        Manager.updateManager(req.body, req.params.id).then(updated => {
          res.json(updated);
        });
      } else {
        res.status(404).json({ message: "Manager doesn't exist" });
      }
    })
    .catch(err =>
      res.status(500).json({ error: "Manager cannot get updated", err })
    );
});

// RENTER
router.get("/renter/:id", (req, res) => {
  const { id } = req.params;
  Renter.findByRenterId(id)
    .then(renter => {
      res.status(200).json(renter);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get renter", err });
    });
});

router.put("/renter/:id", (req, res) => {
  Renter.findByRenterId(req.params.id)
    .then(renter => {
      if (renter) {
        Renter.updateRenter(req.body, req.params.id).then(updated => {
          res.json(updated);
        });
      } else {
        res.status(404).json({ message: "Renter doesn't exist" });
      }
    })
    .catch(err =>
      res.status(500).json({ error: "Renter cannot get updated", err })
    );
});

router.delete("/:id", (req, res) => {
  User.removeUser(req.params.id)
    .then(user => res.json({ message: `${user} has been deleted` }))
    .catch(err =>
      res.status.apply(500).json({ error: "Failed to delete user", err })
    );
});

module.exports = router;
