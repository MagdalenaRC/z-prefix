/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE user_account CASCADE')
  await knex('user_account').del()
  await knex('user_account').insert([
    {firstname: 'Marie', lastname: 'Curie', username: 'mcurie', password: 'welcome1'},
    {firstname: 'Rosalind', lastname: 'Franklin', username: 'rfranklin', password: 'welcome2'},
    {firstname: 'Alfred', lastname: 'Nobel', username: 'anobel', password: 'welcome3'}
  ]);
};
