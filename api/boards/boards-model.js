const db = require('../data/db-config')

async function getAll() {
    const result = await db('boards')
    return result
}

async function getById(id) {
    const result = await db('boards').where('board_id', id)
    return result
}

module.exports = {
    getAll,
    getById,
}
