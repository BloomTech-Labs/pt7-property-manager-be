exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("property")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("property").insert([
        {
          name: "The White House",
          img:
            "https://www.whitehouse.gov/wp-content/uploads/2017/12/P20170614JB-0303-2-1024x683.jpg",
          manager_id: 1
        },
        {
          name: "Slums",
          img:
            "https://www.habitatforhumanity.org.uk/wp-content/uploads/2017/10/what-is-a-slum-definition-in-romania.jpg",
          manager_id: 2
        }
      ]);
    });
};
