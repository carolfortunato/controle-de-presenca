exports.up = function(knex) {
  return knex.schema.createTable('class_disciplines', function(table) {
    table.increments('id').primary();
    table.integer('class_id').unsigned().references('id').inTable('classes').onDelete('CASCADE');
    table.integer('discipline_id').unsigned().references('id').inTable('disciplines').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('class_disciplines');
};
