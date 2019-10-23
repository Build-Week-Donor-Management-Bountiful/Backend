
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('donorContact').del()
    .then(function () {
      // Inserts seed entries
      return knex('donorContact').insert([
        {contact_email: "mack@mack.edu", last_communication_date: "2019-10-23", amount_donated: 120},
        {contact_email: "pro@pro.edu", last_communication_date: "2019-10-23", amount_donated: 120},
      ]);
    });
};
