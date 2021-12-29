
exports.seed = function(knex) {
  return knex('boards').truncate()
    .then(function () {
      return knex('boards').insert([
        {board_name: 'Pow Slayer', board_size: "145cm", in_stock: "Yes"},
        {board_name: 'Freestyle', board_size: "140cm", in_stock: "No"},
        {board_name: 'Charger', board_size: "150cm", in_stock: "Yes"}
      ]);
    });
};

