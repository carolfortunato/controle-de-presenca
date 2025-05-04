exports.up = function(knex) {
  return knex.schema.createTable('professors', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('employee_number').unique().notNullable();
    table.enu('status', ['active', 'inactive']).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('professors');
};
