
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('campaigns').del()
    .then(function () {
      // Inserts seed entries
      return knex('campaigns').insert([
        {campaign_name: "Mack's Campaign", assigned_to_org: 1},
        {campaign_name: "Pro's Campaign", assigned_to_org: 2}
      ]);
    });
};
