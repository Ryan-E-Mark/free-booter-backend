
exports.seed = function(knex) {
  return knex('table_name').truncate()
    .then(function () {
      return knex('boards').insert([
        {board_id: 1, colName: 'rowValue1'},
        {board_id: 2, colName: 'rowValue2'},
        {board_id: 3, colName: 'rowValue3'}
      ]);
    });
};
