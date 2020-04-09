const db = require("../../../database/db-config.js");

module.exports = {
  addUnit,
  findAllUnits,
  findUnitById,
  updateUnit,
  removeUnit,
  getPropertiesUnits,
};

function addUnit(unit) {
  return db("units")
    .insert(unit, "id")
    .then((ids) => ({ id: ids[0] }));
}

function findAllUnits() {
  return db("units")
    .select(
      "units.id",
      "number",
      "property_id",
      "description",
      "date_available",
      "parking",
      "type",
      "cooling",
      "heating",
      "pets",
      "laundry",
      "fees",
      "sqft",
      "elementary",
      "middle",
      "high",
      "district",
      "p.img",
      "address",
      "city",
      "state",
      "zip",
      "country",
      "manager_id"
    )
    .join("users as u", "units.renter_id", "=", "u.id")
    .join("leaseterms as l", "units.lease_id", "=", "l.id")
    .join("property as p", "units.property_id", "=", "p.id");
}

function findUnitById(id) {
  return db("units")
    .select(
      "units.id",
      "number",
      "property_id",
      "description",
      "date_available",
      "parking",
      "type",
      "cooling",
      "heating",
      "pets",
      "laundry",
      "fees",
      "sqft",
      "elementary",
      "middle",
      "high",
      "district",
      "p.img",
      "address",
      "city",
      "state",
      "zip",
      "country",
      "manager_id",
      "payment_due_date",
      "lease_start_date",
      "lease_end_date",
      "lease_term",
      "monthly_rent",
      "security_deposit",
      "firstName",
      "lastName"
    )
    .join("users as u", "units.renter_id", "=", "u.id")
    .join("leaseterms as l", "units.lease_id", "=", "l.id")
    .join("property as p", "units.property_id", "=", "p.id")
    .where({ "units.id": id })
    .first();
}

function updateUnit(changes, id) {
  return db("units").where({ id }).update(changes);
}

function removeUnit(id) {
  return db("units").where({ id }).delete();
}

function getPropertiesUnits(id) {
  return db("units").where({ property_id: id });
}
