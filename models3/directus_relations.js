const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_relations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    many_collection: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    many_field: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    one_collection: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    one_field: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    one_collection_field: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    one_allowed_collections: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    junction_field: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    sort_field: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    one_deselect_action: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "nullify"
    }
  }, {
    sequelize,
    tableName: 'directus_relations',
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
        name: "directus_relations_many_collection_foreign",
        using: "BTREE",
        fields: [
          { name: "many_collection" },
        ]
      },
      {
        name: "directus_relations_one_collection_foreign",
        using: "BTREE",
        fields: [
          { name: "one_collection" },
        ]
      },
    ]
  });
};
