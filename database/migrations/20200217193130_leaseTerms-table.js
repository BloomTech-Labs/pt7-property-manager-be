exports.up = async function(knex) {
  await knex.schema.createTable("leaseTerms", tbl => {
    tbl.increments();
    tbl.date("payment_due_date").notNullable();
    tbl.date("lease_start_date").notNullable();
    tbl.date("lease_end_date").notNullable();
    tbl.string("lease_term", 128).notNullable();
    tbl.integer("monthly_rent").notNullable();
    tbl.integer("security_deposit").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("leaseTerms");
};
