exports.up = async function(knex) {
  await knex.schema.createTable("units", tbl => {
    tbl.increments();
    tbl.integer("number").notNullable();
    tbl
      .integer("renter_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("lease_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("leaseterms")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("property_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("property")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("units");
};
