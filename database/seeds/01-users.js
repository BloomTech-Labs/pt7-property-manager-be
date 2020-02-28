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
          phoneNumber: "1234567890",
          firstName: "Mister",
          lastName: "Rogers",
          role: "Manager"
        },
        {
          email: "fake2@fake.com",
          password: bcrypt.hashSync("user2", 16),
          phoneNumber: "1345678901",
          firstName: "Broke",
          lastName: "Millennial",
          role: "Renter"
        },
        {
          email: "sagemjordan@gmail.com",
          password: bcrypt.hashSync("ilovelambda", 16),
          phoneNumber: "3176088599",
          firstName: "Sage",
          lastName: "Jordan",
          role: "Manager"
        },
        {
          email: "genericuser@gmail.com",
          password: bcrypt.hashSync("password", 16),
          phoneNumber: "61824536281",
          firstName: "Generic",
          lastName: "User",
          role: "Renter"
        },
        {
          email: "bigbird13@gmail.com",
          password: bcrypt.hashSync("sesamestreet", 16),
          firstName: "Big",
          lastName: "Bird",
          role: "Renter"
        }
      ]);
    });
};
