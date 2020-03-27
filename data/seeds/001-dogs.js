
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {
          name: "Maya",
          breed: "Dachshund"
        },
        {
          name: "Vincent",
          breed: "Dachshund"
        },
        {
          name: "Shelby",
          breed: "Shih Tzu"
        },
        {
          name: "Daxter",
          breed: "Sharpei mix"
        }
      ]);
    });
};
