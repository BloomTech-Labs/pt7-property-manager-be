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
            "https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/07/July-open-houses-header-1.jpg",
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
            "https://d1xyolhen8fnqh.cloudfront.net/media/hotels/slideshow_images_staged/large/1075224.jpg",
          manager_id: 1
        },
        {
          name: "The Hobbit House",
          img:
            "https://previews.123rf.com/images/ggfoto/ggfoto1909/ggfoto190901479/130522681-matamata-new-zealand-october-10-2018-hobbit-house-hobbiton-movie-set.jpg",
          manager_id: 3
        }
      ]);
    });
};
