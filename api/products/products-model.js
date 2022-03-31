const db = require('../data/db-config')

async function getAll() {
    const result = await db('products')
    return result
}

async function getById(id) {
    const result = await db('products').where('product_id', id).first()
    return result
}

async function findBy(filter) {
    const result = await db('products').where(filter)
    return result
}

async function postBoard(product) {
    const result = await db('products as b').insert(product, ['b.product_id', 'b.product_name', 'b.product_size', 'b.img', 'b.description', 'b.in_stock']).first()
    return result
}

async function updateById(product, id) {
    const result = await db('products as b').where('product_id', id).update(product, ['b.product_name', 'b.product_size', 'b.img', 'b.description', 'b.in_stock'])
    return result
}

async function deleteById(id) {
    const deletedPlant = await db('products').where('product_id', id)
    const deletion = await db('products').where('product_id', id).del()
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
