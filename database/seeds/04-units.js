exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("units")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("units").insert([
        { number: 1, renter_id: 1, lease_id: 1, property_id: 1 },
        { number: 1, renter_id: 2, lease_id: 2, property_id: 2 }
      ]);
    });
};
