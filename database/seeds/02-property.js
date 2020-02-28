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
          manager_id: 1
        },
        {
          name: "123 Fake Street",
          img: "https://frinkiac.com/img/S12E18/1067483.jpg",
          manager_id: 1
        },
        {
          name: "4934 Charter Way",
          img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.washingtonian.com%2F2019%2F05%2F02%2Fthe-five-best-looking-open-houses-this-weekend-5-4-5-5%2F&psig=AOvVaw2Y2E001EJpSPMt45E5BoUj&ust=1582949747766000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDr3b-x8-cCFQAAAAAdAAAAABAJ",
          manager_id: 3
        },
        {
          name: "Lambda Headquarters",
          img:
            "https://upload.wikimedia.org/wikipedia/en/4/49/Lambdaschoolofmusicandfinearts.png",
          manager_id: 1
        },
        {
          name: "Fancy House",
          img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcollegiannews.com%2F10-most-common-types-of-houses-in-the-usa%2F507137%2F&psig=AOvVaw2Y2E001EJpSPMt45E5BoUj&ust=1582949747766000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDr3b-x8-cCFQAAAAAdAAAAABAa",
          manager_id: 1
        },
        {
          name: "The Hobbit House",
          img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_130522681_matamata-new-zealand-october-10-2018-hobbit-house-hobbiton-movie-set.html&psig=AOvVaw1Ea7JvSUfyf5f4ZkVEeRa2&ust=1582949838808000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCGze2x8-cCFQAAAAAdAAAAABAD",
          manager_id: 3
        }
      ]);
    });
};
