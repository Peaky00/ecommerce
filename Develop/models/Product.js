const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import your Sequelize database connection

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // Define columns for the Product model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Allows up to 10 digits with 2 decimal places
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // Reference the 'category' model
        key: 'id', // Reference the 'id' column of the 'category' model
      },
    },
  },
  {
    sequelize,
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
    freezeTableName: true, // Use the same model name as the table name
    underscored: true, // Use snake_case for column names
    modelName: 'product', // Set the model name to 'product'
  }
);

module.exports = Product;
