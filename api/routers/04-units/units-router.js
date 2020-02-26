const express = require("express");
const units = require("./units-model");
const router = express.Router();

router.get("/", (req, res) => {
  units.findAllUnits()
    .then(units => {
      res.status(200).json({ units });
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to get all units", err: err.message })
    );
});

router.post("/", (req, res) => {
  const unit = req.body;
  units.addUnit(unit)
    .then(prop => {
      res.status(200).json({ prop });
    })
    .catch(err => {
      res.status(500).json({ err: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  units.findUnitById(id)
    .then(unit => {
      if (unit) {
        res.status(200).json({ unit });
      } else {
        res.status(400).json({ message: "Please supply a valid ID" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Failed to get unit", err: err.message });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const unit = req.body;
  units.updateUnit(unit, id)
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
        .json({ err: err.message, message: "Error updating unit" });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  units.removeUnit(id)
    .then(nan =>
      res.status(204).json({ message: `Unit ${id} has been deleted` })
    )
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to delete unit", err: err.message })
    );
});

module.exports = router;