exports.up = async function (knex) {
  await knex.schema.createTable("applications", (tbl) => {
    tbl.increments();
    tbl.string("address").notNullable();
    tbl.date("date_of_birth").notNullable();
    tbl.string("dl_number").notNullable();
    tbl.string("social_security").notNullable();
    tbl.string("document").notNullable();
    tbl.string("status").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("applications");
};
