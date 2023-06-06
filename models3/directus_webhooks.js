const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_webhooks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "POST"
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "active"
    },
    data: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    actions: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    collections: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    headers: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'directus_webhooks',
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
    ]
  });
};
