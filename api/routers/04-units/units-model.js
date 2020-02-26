const db = require("../../../database/db-config.js");

module.exports = {
  addUnit,
  findAllUnits,
  findUnitById,
  updateUnit,
  removeUnit,
};

function addUnit(unit) {
  return db("unit")
    .insert(unit, "id")
    .then(ids => ({ id: ids[0] }));
}

function findAllUnits() {
  return db("unit")
    .join("user as u", "u.id", "unit.renter_id")
    .join("lease_id as l", "l.id", "unit.lease_id")
    .join("property as p", "p.id", "unit.property_id");
}

function findUnitById(id) {
  return db("unit")
    .join("user as u", "u.id", "unit.renter_id")
    .join("lease_id as l", "l.id", "unit.lease_id")
    .join("property as p", "p.id", "unit.property_id")
    .where({ id })
    .first();
}

function updateUnit(changes, id) {
  return db("unit")
    .where({ id })
    .update(changes);
}

function removeUnit(id) {
  return db("unit")
    .where({ id })
    .delete();
}