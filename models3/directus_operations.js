const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_operations', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position_x: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position_y: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    options: {
      type: DataTypes.JSON,
      allowNull: true
    },
    resolve: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_operations',
        key: 'id'
      },
      unique: "directus_operations_resolve_foreign"
    },
    reject: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_operations',
        key: 'id'
      },
      unique: "directus_operations_reject_foreign"
    },
    flow: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'directus_flows',
        key: 'id'
      }
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
    tableName: 'directus_operations',
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
        name: "directus_operations_resolve_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "resolve" },
        ]
      },
      {
        name: "directus_operations_reject_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reject" },
        ]
      },
      {
        name: "directus_operations_flow_foreign",
        using: "BTREE",
        fields: [
          { name: "flow" },
        ]
      },
      {
        name: "directus_operations_user_created_foreign",
        using: "BTREE",
        fields: [
          { name: "user_created" },
        ]
      },
    ]
  });
};
