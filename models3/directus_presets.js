const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_presets', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    bookmark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
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
      allowNull: true
    },
    search: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    layout: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "tabular"
    },
    layout_query: {
      type: DataTypes.JSON,
      allowNull: true
    },
    layout_options: {
      type: DataTypes.JSON,
      allowNull: true
    },
    refresh_interval: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    filter: {
      type: DataTypes.JSON,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "bookmark_outline"
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'directus_presets',
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
        name: "directus_presets_collection_foreign",
        using: "BTREE",
        fields: [
          { name: "collection" },
        ]
      },
      {
        name: "directus_presets_user_foreign",
        using: "BTREE",
        fields: [
          { name: "user" },
        ]
      },
      {
        name: "directus_presets_role_foreign",
        using: "BTREE",
        fields: [
          { name: "role" },
        ]
      },
    ]
  });
};
