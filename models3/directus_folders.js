const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_folders', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parent: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_folders',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'directus_folders',
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
        name: "directus_folders_parent_foreign",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
    ]
  });
};
