// prettier-ignore
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("applications")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("applications").insert([
        {address: "cash",date_of_birth: "1985-10-11",dl_number: "132323232",social_security: "323-85-4544",document: "https://www.handsonbanking.org/financial-education/wp-content/uploads/2012/10/bank_statement.png", status: "approved"
        },
        {address: "cash",date_of_birth: "1975-03-11",dl_number: "295884566",social_security: "999-85-5555",document: "https://www.depositaccounts.com/content/photos/misc/bank-statement.png", status: "not approved"
        }
      ]);
    });
};
