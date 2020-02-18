exports.up = async function(knex) {
    await knex.schema
    
    .createTable("units", tbl => {
        tbl.increments();
        tbl.integer("number").notNullable();
        tbl.integer("property_id").unsigned().notNullable().references().inTable("property");
        tbl.integer("renter_id").unsigned().notNullable().references().inTable("users");
        tbl.integer("lease_id").unsigned().notNullable().references().inTable("leaseTerms");
    })
}

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("units")
};