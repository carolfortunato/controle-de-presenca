exports.up = function(knex) {
  return knex.schema.createTable('professor_classes', function(table) {
    table.increments('id').primary();
    table.integer('professor_id').unsigned().references('id').inTable('professors').onDelete('CASCADE');
    table.integer('class_id').unsigned().references('id').inTable('classes').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('professor_classes');
};
