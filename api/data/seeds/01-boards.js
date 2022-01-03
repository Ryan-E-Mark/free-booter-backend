
exports.seed = function(knex) {
  return knex('boards').truncate()
    .then(function () {
      return knex('boards').insert([
        {board_name: 'Pow Slayer', board_size: "145cm", in_stock: "Yes", description: "Stable with lots of float, perfect for the deepest of pow and the steepest of slope."},
        {board_name: 'Freestyle', board_size: "140cm", in_stock: "No", description: "A more symmetrical shape with increased nose and tail for all sorts of tricks."},
        {board_name: 'Charger', board_size: "150cm", in_stock: "Yes", description: "What more do you need to know?"}
      ]);
    });
};

