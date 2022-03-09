const db = require('../data/db-config');

async function getAll() {
    const result = await db('users');
    return result;
}


module.exports = {
    getAll,
}
