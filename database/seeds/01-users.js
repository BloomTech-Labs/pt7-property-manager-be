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
          role: "Manager",
          img:
            "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2014/12/fstoppers-dylan-patrick-setting-up-a-successful-headshot-session-8.jpg"
        },
        {
          email: "fake2@fake.com",
          password: bcrypt.hashSync("user2", 16),
          phoneNumber: "1345678901",
          firstName: "Broke",
          lastName: "Millennial",
          role: "Renter",
          img:
            "https://michael-schacht.com/wp-content/uploads/2018/11/parkerheadshot.jpg"
        },
        {
          email: "sagemjordan@gmail.com",
          password: bcrypt.hashSync("ilovelambda", 16),
          phoneNumber: "3176088599",
          firstName: "Sage",
          lastName: "Jordan",
          role: "Manager",
          img:
            "https://pbs.twimg.com/profile_images/1099022806677889024/4wMmFbGr_400x400.jpg"
        },
        {
          email: "genericuser@gmail.com",
          password: bcrypt.hashSync("password", 16),
          phoneNumber: "61824536281",
          firstName: "Generic",
          lastName: "User",
          role: "Renter",
          img:
            "https://i.pinimg.com/736x/2e/0a/f8/2e0af89dac4dbf2aae5bbca791adb4c6.jpg"
        },
        {
          email: "bigbird13@gmail.com",
          password: bcrypt.hashSync("sesamestreet", 16),
          firstName: "Big",
          lastName: "Bird",
          role: "Renter",
          img:
            "https://www.carmelstudiosphotography.com/wp-content/gallery/professional-headshots/Professional-Headshot-6.jpg"
        }
      ]);
    });
};
