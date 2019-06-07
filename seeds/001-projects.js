
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Buy Rasberry pi',
          description:"but from amazon"
        },
        {
          name: 'Buy food',
          description:"learn to cook"
        },
        {
          name: 'Rasberry pi',
          description:"learn to use pi"
        },
      ]);
    });
};
