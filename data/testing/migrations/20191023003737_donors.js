
exports.up = function(knex) {
    return knex.schema.createTable('donors', tbl => {
        tbl.increments()
        tbl.string('donor_name', 128).notNullable()
        tbl.integer('assigned_to_campaign')
        .references('id')
        .inTable('campaigns')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('donors')
  };