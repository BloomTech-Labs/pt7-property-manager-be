exports.up = async function(knex) {
  await knex.schema.createTable("property", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.string("img", 255);
    tbl
      .integer("manager_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("property");
};
