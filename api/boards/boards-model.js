const db = require('../data/db-config')

async function getAll() {
    const result = await db('boards')
    return result
}

async function getById(id) {
    const result = await db('boards').where('board_id', id).first()
    return result
}

async function postBoard(board) {
    const result = await db('boards as b').insert(board, ['b.board_id', 'b.board_name', 'b.board_size', 'b.img', 'b.description', 'b.in_stock']).first()
    return result
}

module.exports = {
    getAll,
    getById,
    postBoard,
}
