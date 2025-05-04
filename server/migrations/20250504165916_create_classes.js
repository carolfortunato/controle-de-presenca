exports.up = function(knex) {
  return knex.schema.createTable('classes', function(table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.string('semester', 10).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('classes');
};
