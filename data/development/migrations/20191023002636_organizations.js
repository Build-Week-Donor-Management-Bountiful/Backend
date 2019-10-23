
exports.up = function(knex) {
    return knex.schema.createTable('organizations', tbl => {
        tbl.increments()
        tbl.string('org_name', 128).notNullable()
        tbl.integer('assigned_to_user')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('organizations')
  };