exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("property")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("property").insert([
        { name: "The White House", manager_id: 1 },
        { name: "Slums", manager_id: 2 }
      ]);
    });
};
