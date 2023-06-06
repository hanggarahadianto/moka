const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_fields', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    collection: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    field: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    special: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    interface: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    options: {
      type: DataTypes.JSON,
      allowNull: true
    },
    display: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    display_options: {
      type: DataTypes.JSON,
      allowNull: true
    },
    readonly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sort: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    width: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "full"
    },
    translations: {
      type: DataTypes.JSON,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conditions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    group: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    validation: {
      type: DataTypes.JSON,
      allowNull: true
    },
    validation_message: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'directus_fields',
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
        name: "directus_fields_collection_foreign",
        using: "BTREE",
        fields: [
          { name: "collection" },
        ]
      },
    ]
  });
};
