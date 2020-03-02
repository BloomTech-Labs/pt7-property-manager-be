// Model for User CRUD (post/get/update/delete)
const db = require("../../../database/db-config.js");

module.exports = {
  addUser, // Adds a user
  findAllUsers, // Gets all Users
  findBy, // Finds User by filter
  removeUser, // Removes a user by id
  findUsersByRole, // Gets all users by role
  findUserById, // Gets user by id
  updateUser // Updates user
};

// ALL USER

function addUser(user) {
  // Adds a user
  return db("users")
    .insert(user, "id")
    .then(ids => ({ id: ids[0] }));
}

function findAllUsers() {
  // Gets all Users
  return db("users");
}

function findBy(filter) {
  // Finds User by filter
  return db("users")
    .select("email", "password")
    .where(filter);
}

function removeUser(id) {
  // Removes a user by id
  return db("users")
    .where({ id })
    .delete();
}

function findUsersByRole(role) {
  // Gets all users by role
  return db("users").where({ role });
}

function findUserById(id) {
  // Gets user by id
  return db("users")
    .where({ id })
    .first();
}

function updateUser(changes, id) {
  // Updates user profile
  return db("users")
    .where({ id })
    .update(changes);
}
