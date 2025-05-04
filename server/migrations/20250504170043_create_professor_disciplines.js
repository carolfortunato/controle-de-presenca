exports.up = function(knex) {
  return knex.schema.createTable('professor_disciplines', function(table) {
    table.increments('id').primary();
    table.integer('professor_id').unsigned().references('id').inTable('professors').onDelete('CASCADE');
    table.integer('discipline_id').unsigned().references('id').inTable('disciplines').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('professor_disciplines');
};
