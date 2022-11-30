/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('members', function (table) {
      table.increments('id');
      table.string('rank');
      table.string('l_name');
      table.string('f_name');
      table.string('email_addr');
      table.string('unit');
      table.string('office_symbol');
      table.string('job_code');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('members');
};