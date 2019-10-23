
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('organizations').del()
    .then(function () {
      // Inserts seed entries
      return knex('organizations').insert([
        {org_name: "Mack's Organization", assigned_to_user: 1},
        {org_name: "Pro's Organization", assigned_to_user: 2}
      ]);
    });
};
