
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        { username: "Ryan", password: "password1", email: null }
      ]);
    });
};
