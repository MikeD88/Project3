/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('member_records', function (table) {
      table.integer('member');
      table.integer('training');
      table.foreign('member').references('members.id').onDelete('CASCADE');
      table.foreign('training').references('trainings.id');
      table.date('completion_date');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('member_records');
};
