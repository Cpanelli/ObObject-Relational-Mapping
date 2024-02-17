const { Model, DataTypes } = require("sequelize");
const dbConnection = require("../config/connection.js");

class Category extends Model {}

Category.initialize = () => {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "category",
    }
  );
};

module.exports = Category;
