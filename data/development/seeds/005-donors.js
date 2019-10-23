
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('donors').del()
    .then(function () {
      // Inserts seed entries
      return knex('donors').insert([
        {donor_name: "A Friend of Mack", assigned_to_campaign: 1, assigned_to_donor: 1},
        {donor_name: "A Friend of Development", assigned_to_campaign: 2, assigned_to_donor: 2},
      ]);
    });
};
