const db = require('../data/db-config');

async function getAll() {
    const result = await db('users');
    return result;
}

async function getById(id) {
    const result = await db('users').where('user_id', id);
    return result;
}

async function addUser(user) {
    const result = await db('users').insert(user, ['user_id', 'username', 'email']);
    return result[0];
}

async function updateById(id, user) {
    const resultId = await db('users').where('user_id', id).update(user);
    return await db('users').where('user_id', resultId).first();
}


module.exports = {
    getAll,
    getById,
    addUser,
    updateById
}
