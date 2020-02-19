exports.up = async function(knex) {
  await knex.schema.createTable("property", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl
      .integer("manager_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("property");
};
