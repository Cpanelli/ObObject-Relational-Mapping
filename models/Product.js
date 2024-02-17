const { Model, DataTypes } = require("sequelize");
const dbConnection = require("../config/connection");

class Product extends Model {}

Product.initialize = () => {
  Product.init(
    {
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
        type: DataTypes.DECIMAL(10, 2),
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
        allowNull: true,
        references: {
          model: "category",
          key: "id",
        },
      },
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "product",
    }
  );
};

module.exports = Product;
