// Model for User CRUD (post/get/update/delete)
const db = require("../../../database/db-config.js");

module.exports = {
  addUser, // Adds a user
  findAllUsers, // Gets all Users
  findBy, // Finds User by filter
  removeUser, // Removes a user by id
  findUsersByRole, // Gets all users by role
  findUserById, // Gets user by id
  updateManager, // Updates manager profile
  updateRenter // Updates renter profile
};

// ALL USER

function addUser(user) {
  // Adds a user
  return db("user")
    .insert(user, "id")
    .then(ids => ({ id: ids[0] }));
}

function findAllUsers() {
  // Gets all Users
  return db("user");
}

function findBy(filter) {
  // Finds User by filter
  return db("user").where({ filter });
}

function removeUser(id) {
  // Removes a user by id
  return db("user")
    .where({ id })
    .delete();
}

function findUsersByRole(role) {
  // Gets all users by role
  return db("user").where({ role });
}

function findUserById(id) {
  // Gets user by id
  return db("user")
    .where({ id })
    .first();
}

// These are seperated for Auth reasons
function updateManager(changes, id) {
  // Updates manager profile
  return db("user")
    .where({ id })
    .update(changes);
}
function updateRenter(changes, id) {
  // Updates renter profile
  return db("user")
    .where({ id })
    .update(changes);
}
