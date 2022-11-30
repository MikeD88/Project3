/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE members CASCADE')
  await knex('members').del()
  await knex('members').insert([
    {
      id: 1,
      rank: 'Sgt',
      l_name: 'Ortega',
      f_name: 'Teena',
      email_addr: 'teenaortega@yahoo.com',
      unit: 'DEL7',
      office_symbol: 'ISRD',
      job_code: '5I071',
    },
    {
      id: 2,
      rank: 'Amn',
      l_name: 'Robinson',
      f_name: 'Marcus',
      email_addr: 'rob@email.com',
      unit: '72nd ISRS',
      office_symbol: 'DOA',
      job_code: '51471'
    },
    {
      id: 3,
      rank: 'SMSgt',
      l_name: 'Thomas',
      f_name: 'Billy',
      email_addr: 'asdfasdf@email.com',
      unit: '782nd ISRS',
      office_symbol: 'DOB',
      job_code: '50471'
    },
  ]);
};