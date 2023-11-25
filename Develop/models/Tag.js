const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js'); // Import your Sequelize database connection

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// set up fields and rules for Tag model
Tag.init(
  {
    // Define columns for the Tag model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
    freezeTableName: true, // Use the same model name as the table name
    underscored: true, // Use snake_case for column names
    modelName: 'tag', // Set the model name to 'tag'
  }
);

module.exports = Tag;
