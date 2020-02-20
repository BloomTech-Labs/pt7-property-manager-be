// Model for User CRUD (post/get/update/delete)
const db = require("../../../database/db-config.js");

module.exports = {
  addUser,
  findAllUser,
  findManger,
  findRenter,
  findByManagerId,
  findByRenterId,
  updateManager,
  updateRenter,
  removeUser
};

// ALL USER

function addUser(user) {
  return db("user")
    .insert(user, "id")
    .then(ids => ({ id: ids[0] }));
}

function findAllUser() {
  return db("user");
}

function removeUser(id) {
  return db("user")
    .where({ id })
    .delete();
}

// MANAGER

function findManger(filter) {
  return db("user").where(filter);
}

function findByManagerId(filter) {
  return db("user")
    .where({ id })
    .first();
}

function updateManager(changes, id) {
  return db("user")
    .where({ id })
    .update(changes);
}

// RENTER

function findRenter(filter) {
  return db("user").where(filter);
}

// Questions whether or not we need both.

function findByRenterId(id) {
  return db("user")
    .where({ id })
    .first();
}

function updateRenter(changes, id) {
  return db("user")
    .where({ id })
    .update(changes);
}
