const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "fake@fake.com",
          password: bcrypt.hashSync("user1", 16),
          phoneNumber: 1234567890,
          firstName: "Mister",
          lastName: "Rogers",
          role: "Manager"
        },
        {
          email: "fake2@fake.com",
          password: bcrypt.hashSync("user2", 16),
          phoneNumber: 1345678901,
          firstName: "Broke",
          lastName: "Millennial",
          role: "Renter"
        }
      ]);
    });
};
