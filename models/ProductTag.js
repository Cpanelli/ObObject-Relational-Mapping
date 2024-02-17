const { Model, DataTypes } = require("sequelize");
const dbConnection = require("../config/connection");

class ProductTag extends Model {}

ProductTag.initialize = () => {
  ProductTag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "product",
          key: "id",
        },
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "tag",
          key: "id",
        },
      },
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "product_tag",
    }
  );
};

module.exports = ProductTag;
