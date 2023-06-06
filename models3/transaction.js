const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
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
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transaction_details: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'transaction_details',
        key: 'id'
      },
      unique: "transaction_transaction_details_foreign"
    },
    customer_details: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'customer_details',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'transaction',
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
        name: "transaction_transaction_details_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transaction_details" },
        ]
      },
      {
        name: "transaction_user_created_foreign",
        using: "BTREE",
        fields: [
          { name: "user_created" },
        ]
      },
      {
        name: "transaction_user_updated_foreign",
        using: "BTREE",
        fields: [
          { name: "user_updated" },
        ]
      },
      {
        name: "transaction_customer_details_foreign",
        using: "BTREE",
        fields: [
          { name: "customer_details" },
        ]
      },
    ]
  });
};
