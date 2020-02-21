// Router setup and model import

router.get("/", (req, res) => {
  // Get all users
  User.findAllUsers()
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to get all users", err: err.message })
    );
});

router.get("/:role", (req, res) => {
  // Get all users by role
  const role = req.params.role;
  User.findUsersByRole(role)
    .then(users => {
      if (role === "Manager") {
        res.status(200).json({ Managers: users });
      } else {
        res.status(200).json({ Renters: users });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to get all users", err: err.message })
    );
});

router.get("/:id", (req, res) => {
  // Get user by ID
  const { id } = req.params;
  User.findUserById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(400).json({ message: "Please supply a valid ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get user", err: err.message });
    });
});

router.put("/manager/:id", (req, res) => {
  // Finds manager by
  const id = req.params.id;
  const user = req.body;
  User.updateManager(user, id)
    .then(updated => {
      if (updated) {
        res.status(200).json({ updated });
      } else {
        res.status(400).json({ message: "Please provide a valid id" });
      }
    })
    .catch(err => {
      res.status(500).json({ err: err.message, message: "Error " });
    });
});

router.put("/renter/:id", (req, res) => {
  // Finds renter by ID
  const id = req.params.id;
  const user = req.body;
  User.updateRenter(user, id)
    .then(updated => {
      if (updated) {
        res.status(200).json({ updated });
      } else {
        res.status(400).json({ message: "Please provide a valid id" });
      }
    })
    .catch(err => {
      res.status(500).json({ err: err.message, message: "Error " });
    });
});

router.delete("/:id", (req, res) => {
  // Deletes User by ID
  const id = req.params.id;
  User.removeUser(id)
    .then(nan =>
      res.status(204).json({ message: `User ${id} has been deleted` })
    )
    .catch(err =>
      res.status(500).json({ error: "Failed to delete user", err: err.message })
    );
});

module.exports = router;
