
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {id: 1, number: 1, property_id: 1, renter_id: 1},
        {id: 2, number: 1, property_id: 2, renter_id: 2},
      ]);
    });
};