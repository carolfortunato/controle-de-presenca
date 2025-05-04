exports.up = function(knex) {
  return knex.schema.createTable('disciplines', function(table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.string('code', 20).notNullable().unique();
    table.integer('workload').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('disciplines');
};
