const db = require('../data/db-config')

async function getAll() {
    const result = await db('boards')
    return result
}

async function getById(id) {
    const result = await db('boards').where('board_id', id).first()
    return result
}

async function findBy(filter) {
    const result = await db('boards').where(filter)
    return result
}

async function postBoard(board) {
    const result = await db('boards as b').insert(board, ['b.board_id', 'b.board_name', 'b.board_size', 'b.img', 'b.description', 'b.in_stock']).first()
    return result
}

async function updateById(board, id) {
    const result = await db('boards as b').where('board_id', id).update(board, ['b.board_name', 'b.board_size', 'b.img', 'b.description', 'b.in_stock'])
    return result
}

async function deleteById(id) {
    const deletedPlant = await db('boards').where('board_id', id)
    const deletion = await db('boards').where('boards_id', id).del()
    return deletedPlant
}

module.exports = {
    getAll,
    getById,
    postBoard,
    findBy,
    updateById,
    deleteById
}
