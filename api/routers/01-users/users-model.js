// Model for User CRUD (post/get/update/delete)
const db = require("../../../database/db-config.js");

module.exports = {
  addUser,
  findAllUser,
  removeUser,
  findUserByRole,
  findUserById,
  updateManager,
  updateRenter
};

// ALL USER

function addUser(user) {
  // Adds a user
  return db("user")
    .insert(user, "id")
    .then(ids => ({ id: ids[0] }));
}

function findAllUser() {
  // Gets all users
  return db("user");
}

function removeUser(id) {
  // Removes a user by id
  return db("user")
    .where({ id })
    .delete();
}

function findUserByRole(role) {
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
