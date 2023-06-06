const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_created: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_updated: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_category: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'payment_category',
        key: 'id'
      }
    },
    order_product_details: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'order_details',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "payment_user_updated_foreign",
        using: "BTREE",
        fields: [
          { name: "user_updated" },
        ]
      },
      {
        name: "payment_user_created_foreign",
        using: "BTREE",
        fields: [
          { name: "user_created" },
        ]
      },
      {
        name: "payment_payment_category_foreign",
        using: "BTREE",
        fields: [
          { name: "payment_category" },
        ]
      },
      {
        name: "payment_order_product_details_foreign",
        using: "BTREE",
        fields: [
          { name: "order_product_details" },
        ]
      },
    ]
  });
};
