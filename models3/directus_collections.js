const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_collections', {
    collection: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    icon: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    display_template: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    singleton: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    translations: {
      type: DataTypes.JSON,
      allowNull: true
    },
    archive_field: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    archive_app_filter: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    archive_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unarchive_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sort_field: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    accountability: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "all"
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    item_duplication_fields: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    group: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'directus_collections',
        key: 'collection'
      }
    },
    collapse: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "open"
    }
  }, {
    sequelize,
    tableName: 'directus_collections',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "collection" },
        ]
      },
      {
        name: "directus_collections_group_foreign",
        using: "BTREE",
        fields: [
          { name: "group" },
        ]
      },
    ]
  });
};
