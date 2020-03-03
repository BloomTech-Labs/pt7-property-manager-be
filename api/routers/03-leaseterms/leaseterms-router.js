const express = require("express");
const lease_term = require("./leaseterms-model");
const router = express.Router();

router.post("/", (req, res) => {
  // Auth
  const lease = req.body;
  lease_term
    .addLeaseTerm(lease)
    .then(term => {
      res.status(200).json({ term });
    })
    .catch(err => {
      res.status(500).json({ err: err.message });
    });
});

router.get("/", (req, res) => {
  // Auth
  // get all lease terms
  lease_term
    .findAllLeaseTerm()
    .then(lease_term => {
      res.status(200).json({ lease_term });
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to get all leases", err: err.message })
    );
});

router.get("/:id", (req, res) => {
  // Auth
  // get all lease terms
  const { id } = req.params;
  lease_term
    .findLeaseTermById(id)
    .then(lease_term => {
      if (lease_term) {
        res.status(200).json({ lease_term });
      } else {
        res.status(400).json({ message: "Please supply a valid id" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Failed to get the lease", err: err.message });
    });
});

router.put("/lease/:id", (req, res) => {
  // Auth
  const id = req.params.id;
  const lease_term = req.body;
  lease_term
    .updateLeaseTerm(lease_term, id)
    .then(updated => {
      if (updated) {
        res.status(200).json({ updated });
      } else {
        res.status(400).json({ message: "Please provide a valid id" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ err: err.message, message: "Error updating lease term" });
    });
});

router.delete("/:id", (req, res) => {
  // Auth
  const id = req.params.id;
  lease_term
    .removeLeaseTerm(id)
    .then(nan =>
      res.status(204).json({ message: `User ${id} has been deleted` })
    )
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to delete lease term", err: err.message })
    );
});

module.exports = router;
