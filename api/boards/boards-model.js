const db = require('../data/db-config')

async function getAll() {
    const result = await db('boards')
    return result
}

module.exports = {
    getAll,
}
