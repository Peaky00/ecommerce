// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Associations
Product.belongsTo(Category, {
  foreignKey: 'category_id', // This is the foreign key in the Product table
});

Category.hasMany(Product, {
  foreignKey: 'category_id', // This links the Category to multiple Products
});

Product.belongsToMany(Tag, {
  through: ProductTag, // This uses the ProductTag model as the intermediary
  foreignKey: 'product_id', // Foreign key in the ProductTag model that links to Product
});

Tag.belongsToMany(Product, {
  through: ProductTag, // This uses the ProductTag model as the intermediary
  foreignKey: 'tag_id', // Foreign key in the ProductTag model that links to Tag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
