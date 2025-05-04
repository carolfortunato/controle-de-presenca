exports.up = function(knex) {
  return knex.schema.createTable('students', function(table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.string('email', 100).notNullable().unique();
    table.string('registration_number', 20).notNullable().unique();
    table.enu('status', ['active', 'inactive']).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('students');
};
