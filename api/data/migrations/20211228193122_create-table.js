
exports.up = async (knex) => {
  await knex.schema
    .createTable('boards', (boards) => {
        boards.increments('board_id')
        boards.string('board_name', 200).notNullable()
        boards.string('board_size', 200)
        boards.string('img')
        boards.string('description', 200)
        boards.string('in_stock').notNullable()
    })
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('boards')
};