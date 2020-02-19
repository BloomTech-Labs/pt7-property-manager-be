
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('property').del()
    .then(function () {
      // Inserts seed entries
      return knex('property').insert([
        {id: 1, name: 'The White House', manager_id: 1, renter_id: 1},
        {id: 2, name: 'Slums', manager_id: 2, renter_id: 2}
      ]);
    });
};