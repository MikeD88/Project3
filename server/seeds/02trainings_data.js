/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('trainings').del()
  await knex('trainings').insert([
    {
      id: 1,
      name: 'CYBER SECURITY',
      frequency: 1
    },
    {
      id: 2,
      name: 'DONT BE RACIST 101',
      frequency: 1
    },
    {
      id: 3,
      name: 'Cyber Awareness',
      frequency: 1
    },
    {
      id: 4,
      name: 'Religious Freedom',
      frequency: 2
    }
  ]);
};
