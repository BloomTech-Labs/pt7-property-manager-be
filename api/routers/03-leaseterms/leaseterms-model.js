const db = require("../../../database/db-config.js");

module.exports = {
    addLeaseTerm, // Adds a lease term
    findAllLeaseTerm, // Gets all lease terms
    findLeaseTermById, // Find a lease term
    updateLeaseTerm, // Updates a lease term
    removeLeaseTerm // Deletes a lease term
}

function addLeaseTerm(lease_term) {
    return db("lease_term")
        .insert(lease_term, "id")
        .then( ids => ({ id: ids[0]}));
}

function findAllLeaseTerm() {
    return db("lease_term")
}

function findLeaseTermById(id) {
    return db("lease_term")
        .where({ id })
        .first();
}

function updateLeaseTerm(changes, id) {
    return db("lease_term")
        .where({ id })
        .update(changes)
}

function removeLeaseTerm(id) {
    return db("lease_term")
        .where({ id })
        .delete();
}