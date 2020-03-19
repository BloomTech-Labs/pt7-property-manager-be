const db = require("../../../database/db-config.js");

module.exports = {
  addUnit,
  findAllUnits,
  findUnitById,
  updateUnit,
  removeUnit
};

function addUnit(unit) {
  return db("units")
    .insert(unit, "id")
    .then(ids => ({ id: ids[0] }));
}

function findAllUnits() {
  return db("units")
    .join("users as u", "u.id", "units.renter_id")
    .join("leaseterms as l", "l.id", "units.lease_id")
    .join("property as p", "p.id", "units.property_id");
}

function findUnitById(id) {
  return db("units")
    .join("users as u", "u.id", "units.renter_id")
    .join("leaseterms as l", "l.id", "units.lease_id")
    .join("property as p", "p.id", "units.property_id")
    .where({ id })
    .first();
}

function updateUnit(changes, id) {
  return db("units")
    .where({ id })
    .update(changes);
}

function removeUnit(id) {
  return db("units")
    .where({ id })
    .delete();
}
