const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_roles',
        key: 'id'
      }
    },
    collection: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    permissions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    validation: {
      type: DataTypes.JSON,
      allowNull: true
    },
    presets: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fields: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'directus_permissions',
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
        name: "directus_permissions_collection_foreign",
        using: "BTREE",
        fields: [
          { name: "collection" },
        ]
      },
      {
        name: "directus_permissions_role_foreign",
        using: "BTREE",
        fields: [
          { name: "role" },
        ]
      },
    ]
  });
};
