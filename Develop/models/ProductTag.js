const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import your Sequelize database connection

// Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// set up fields and rules for ProductTag model
ProductTag.init(
  {
    // Define columns for the ProductTag model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // Reference the 'product' model
        key: 'id', // Reference the 'id' column of the 'product' model
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // Reference the 'tag' model
        key: 'id', // Reference the 'id' column of the 'tag' model
      },
    },
  },
  {
    sequelize,
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
    freezeTableName: true, // Use the same model name as the table name
    underscored: true, // Use snake_case for column names
    modelName: 'product_tag', // Set the model name to 'product_tag'
  }
);

module.exports = ProductTag;
