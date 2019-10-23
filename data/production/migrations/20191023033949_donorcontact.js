
exports.up = function(knex) {
    return knex.schema.createTable('donorContact', tbl => {
        tbl.increments()
        tbl.string('contact_email', 128).notNullable()
        tbl.string('last_communication_date', 128).notNullable()
        tbl.integer('amount_donated')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('donorContact')
  };