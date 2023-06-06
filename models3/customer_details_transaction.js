const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_details_transaction', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    customer_details_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'customer_details',
        key: 'id'
      }
    },
    transaction_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'transaction',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'customer_details_transaction',
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
        name: "customer_details_transaction_transaction_id_foreign",
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
        ]
      },
      {
        name: "customer_details_transaction_customer_details_id_foreign",
        using: "BTREE",
        fields: [
          { name: "customer_details_id" },
        ]
      },
    ]
  });
};
