const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_revisions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    activity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'directus_activity',
        key: 'id'
      }
    },
    collection: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    item: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    delta: {
      type: DataTypes.JSON,
      allowNull: true
    },
    parent: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'directus_revisions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'directus_revisions',
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
        name: "directus_revisions_collection_foreign",
        using: "BTREE",
        fields: [
          { name: "collection" },
        ]
      },
      {
        name: "directus_revisions_parent_foreign",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
      {
        name: "directus_revisions_activity_foreign",
        using: "BTREE",
        fields: [
          { name: "activity" },
        ]
      },
    ]
  });
};
