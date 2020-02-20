const db = require("../../../database/db-config.js");

module.exports = {
  add,
  find,
  findById,
  update,
  remove,
  addPropertyByManagerId,
  getPropertyByManagerId
};

function add(item) {
  return db("property")
    .insert(item, "id")
    .then(ids => ({ id: ids[0] }));
}

function find() {
  return db("property");
}

function findById(id) {
  return db("property")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("property")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("property")
    .where({ id })
    .delete();
}

// ADD PROPERTIES BY MANAGER ID
function addPropertyByManagerId(manager_id) {
  return db("property as p")
    .insert(manager_id, "id")
    .join("users", "users.id", "p.manager_id")
    .where("p.manager_id", manager_id)
    .then(ids => ({ id: ids[0] }));
}

// GET PROPERTIES BY MANAGER ID
function getPropertyByManagerId(manager_id) {
  return db("property as p")
    .select("p.id", "p.name")
    .join("users", "users.id", "p.manager_id")
    .where("p.manager_id", manager_id);
}
