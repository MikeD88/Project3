/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('member_records').del()
  await knex('member_records').insert([
    {
      member: 1,
      training: 1,
      completion_date: '2017-01-30',
    },
    {
      member: 2,
      training: 2,
      completion_date: '2017-01-30',
    },
    {
      member: 1,
      training: 3,
      completion_date: '2017-01-30',
    },
    {
      member: 2,
      training: 4,
      completion_date: '2017-01-30',
    },
    {
      member: 1,
      training: 4,
      completion_date: '2017-01-30',
    },
    {
      member: 2,
      training: 3,
      completion_date: '2017-01-30',
    },
  ]);
};