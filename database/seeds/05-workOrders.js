
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workOrders').del()
    .then(function () {
      // Inserts seed entries
      return knex('workOrders').insert([
        {id: 1, work_order_type: 'repair', work_order_date: '01011981', priority: 'high', problem_description: 'poo everywhere', completion_date: '01011981', start_date: '01011981', permission_to_enter: 'yes', vendor: 'poop r us', units_id: 1}
      ]);
    });
};