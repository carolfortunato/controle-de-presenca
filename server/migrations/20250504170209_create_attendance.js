exports.up = function(knex) {
  return knex.schema.createTable('attendance', function(table) {
    table.increments('id').primary();
    table.integer('student_id').unsigned().references('id').inTable('students').onDelete('CASCADE');
    table.integer('lesson_id').unsigned().references('id').inTable('lessons').onDelete('CASCADE');
    table.enu('status', ['present', 'absent', 'justified']).notNullable();
    table.text('justification');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('attendance');
};
