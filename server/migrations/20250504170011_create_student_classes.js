exports.up = function(knex) {
  return knex.schema.createTable('student_classes', function(table) {
    table.increments('id').primary();
    table.integer('student_id').unsigned().references('id').inTable('students').onDelete('CASCADE');
    table.integer('class_id').unsigned().references('id').inTable('classes').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('student_classes');
};
