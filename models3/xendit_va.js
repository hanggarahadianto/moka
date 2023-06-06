const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xendit_va', {
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
    externalID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_details: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'customer_details',
        key: 'id'
      },
      unique: "xendit_va_customer_details_foreign"
    }
  }, {
    sequelize,
    tableName: 'xendit_va',
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
        name: "xendit_va_customer_details_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_details" },
        ]
      },
      {
        name: "xendit_va_user_created_foreign",
        using: "BTREE",
        fields: [
          { name: "user_created" },
        ]
      },
      {
        name: "xendit_va_user_updated_foreign",
        using: "BTREE",
        fields: [
          { name: "user_updated" },
        ]
      },
    ]
  });
};
