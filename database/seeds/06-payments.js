
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('payments').del()
    .then(function () {
      // Inserts seed entries
      return knex('payments').insert([
        {id: 1, payment_type: 'cash', payment_amount: 1000, payment_date: '01011981', reference_number: 1, payment_category: 'rent', lease_term_id: 1},
      ]);
    });
};