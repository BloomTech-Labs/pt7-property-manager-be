
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('leaseTerms').del()
    .then(function () {
      // Inserts seed entries
      return knex('leaseTerms').insert([
        {id: 1, payment_due_date: 02021982, lease_start_date: 02021982, lease_end_date: 02021982, lease_term: "12", monthly_rent: 1000, security_deposit: 2000, property_id: 1, units_id: 1},
        {id: 2, payment_due_date: 01021981, lease_start_date: 01021981, lease_end_date: 03021982, lease_term: "6", monthly_rent: 2000, security_deposit: 3000, property_id: 2, units_id: 1}
      ]);
    });
};