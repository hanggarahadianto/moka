const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_flows', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "active"
    },
    trigger: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    accountability: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "all"
    },
    options: {
      type: DataTypes.JSON,
      allowNull: true
    },
    operation: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      unique: "directus_flows_operation_unique"
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_created: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'directus_flows',
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
        name: "directus_flows_operation_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "operation" },
        ]
      },
      {
        name: "directus_flows_user_created_foreign",
        using: "BTREE",
        fields: [
          { name: "user_created" },
        ]
      },
    ]
  });
};
