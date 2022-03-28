
exports.seed = function(knex) {
  return knex('products').truncate()
    .then(function () {
      return knex('products').insert([
        {product_name: 'Pow Slayer', product_size: "145cm", in_stock: "Yes", category: "surfer", description: "Stable with lots of float, perfect for the deepest of pow and the steepest of slope."},
        {product_name: 'Freestyle', product_size: "140cm", in_stock: "No", category: "surfer", description: "A more symmetrical shape with increased nose and tail for all sorts of tricks."},
        {product_name: 'Charger', product_size: "150cm", in_stock: "Yes", category: "surfer", description: "What more do you need to know?"},
        {product_name: 'Freebooter Trucker Hat', product_size: "adjustable", in_stock: "Yes", category: "apparel", subCategory: "trucker hat", description: "Trucker hat with patented Freebooter logo"},
        {product_name: 'Freebooter Sweatshirt', product_size: "Medium", in_stock: "No", category: "apparel", subCategory: "sweatshirt", description: "Sweatshirt with patented Freebooter logo"},
        {product_name: 'Freebooter T-Shirt', product_size: "Large", in_stock: "Yes", gender: "male", category: "apparel", subCategory: "tshirts", description: "T-Shirt with the patented Freebooter logo"},
      ]);
    });
};

