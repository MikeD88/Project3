/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('members', function (table) {
      table.increments;
      table.integer('id');
      table.string('l_name');
      table.string('f_name');
      table.string('email_addr');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
