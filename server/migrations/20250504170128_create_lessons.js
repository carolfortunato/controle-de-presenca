exports.up = function(knex) {
  return knex.schema.createTable('lessons', function(table) {
    table.increments('id').primary();
    table.date('date').notNullable();
    table.time('start_time').notNullable();
    table.time('end_time').notNullable();
    table.integer('discipline_id').unsigned().references('id').inTable('disciplines').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lessons');
};
