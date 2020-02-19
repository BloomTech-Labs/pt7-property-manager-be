exports.up = async function(knex) {
  await knex.schema.createTable("units", tbl => {
    tbl.increments();
    tbl.integer("number").notNullable();
    tbl
      .integer("renter_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
    tbl
      .integer("lease_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("leaseTerms");
    tbl
      .integer("property_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("property");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("units");
};
