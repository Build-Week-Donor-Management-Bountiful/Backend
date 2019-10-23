
exports.up = function(knex) {
    return knex.schema.createTable('campaigns', tbl => {
        tbl.increments()
        tbl.string('campaign_name', 128).notNullable()
        tbl.integer('assigned_to_org')
        .references('id')
        .inTable('organizations')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('campaigns')
  };