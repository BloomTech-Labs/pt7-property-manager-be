// Router setup and model import
const express = require("express");
const Properties = require("./properties-model");
const router = express.Router();

router.get("/", (req, res) => {
  // Get all properties
  Properties.find()
    .then(properties => {
      res.status(200).json({ properties });
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to get all properties", err: err.message })
    );
});

router.post("/", (req, res) => {
  // Adds a property
  const property = req.body;
  Properties.add(property)
    .then(prop => {
      res.status(200).json({ prop });
    })
    .catch(err => {
      res.status(500).json({ err: err.message });
    });
});

router.get("/:id", (req, res) => {
  // Get property by ID
  const { id } = req.params;
  Properties.findById(id)
    .then(property => {
      if (property) {
        res.status(200).json({ property });
      } else {
        res.status(400).json({ message: "Please supply a valid ID" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Failed to get property", err: err.message });
    });
});

router.put("/:id", (req, res) => {
  //  Edits property by ID
  const id = req.params.id;
  const property = req.body;
  Properties.update(property, id)
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
        .json({ err: err.message, message: "Error updating property" });
    });
});

router.get("/manager/:id", (req, res) => {
  // Get all properties by manager id
  const id = props.params.id;
  Properties.findManagersProperties(id)
    .then(properties => {
      if (properties) {
        res.status(200).json({ properties });
      } else {
        res
          .status(404)
          .json({ message: `Manager ${id} does not have any properties` });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to get managers properties", err: err.message })
    );
});

router.delete("/:id", (req, res) => {
  // Deletes property by ID
  const id = req.params.id;
  Properties.remove(id)
    .then(nan =>
      res.status(204).json({ message: `Property ${id} has been deleted` })
    )
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to delete property", err: err.message })
    );
});

module.exports = router;
