
exports.up = async (knex) => {
  await knex.schema
    .createTable('products', (products) => {
        products.increments('product_id')
        products.string('product_name', 200).notNullable()
        products.string('product_size', 200)
        products.string('img')
        products.string('gender')
        products.string('category')
        products.string('subCategory')
        products.string('description', 200)
        products.string('in_stock').notNullable()
    })
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.string('email', 200)
  })
};

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('products')
};
