const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "product",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      sort: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_created: {
        type: DataTypes.CHAR(36),
        allowNull: true,
        references: {
          model: "directus_users",
          key: "id",
        },
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      user_updated: {
        type: DataTypes.CHAR(36),
        allowNull: true,
        references: {
          model: "directus_users",
          key: "id",
        },
      },
      date_updated: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      product_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      product_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      product_image: {
        type: DataTypes.CHAR(36),
        allowNull: true,
        references: {
          model: "directus_files",
          key: "id",
        },
      },
      price: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      product_xendit_ewallet_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
          model: "xendit_ewallet",
          key: "id",
        },
      },
      product_xendit_va_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
          model: "xendit_va",
          key: "id",
        },
      },
      product_transaction: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
          model: "transaction",
          key: "id",
        },
      },
      order_details_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
          model: "order_details",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "product",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "product_user_created_foreign",
          using: "BTREE",
          fields: [{ name: "user_created" }],
        },
        {
          name: "product_user_updated_foreign",
          using: "BTREE",
          fields: [{ name: "user_updated" }],
        },
        {
          name: "product_product_image_foreign",
          using: "BTREE",
          fields: [{ name: "product_image" }],
        },
        {
          name: "product_product_xendit_ewallet_id_foreign",
          using: "BTREE",
          fields: [{ name: "product_xendit_ewallet_id" }],
        },
        {
          name: "product_product_xendit_va_id_foreign",
          using: "BTREE",
          fields: [{ name: "product_xendit_va_id" }],
        },
        {
          name: "product_product_transaction_foreign",
          using: "BTREE",
          fields: [{ name: "product_transaction" }],
        },
        {
          name: "product_order_details_id_foreign",
          using: "BTREE",
          fields: [{ name: "order_details_id" }],
        },
      ],
    }
  );
};
