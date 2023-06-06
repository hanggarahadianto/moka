const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_files', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    storage: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    filename_disk: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filename_download: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    folder: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_folders',
        key: 'id'
      }
    },
    uploaded_by: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    },
    uploaded_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modified_by: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    },
    modified_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    charset: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    filesize: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    width: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    embed: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    metadata: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'directus_files',
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
        name: "directus_files_uploaded_by_foreign",
        using: "BTREE",
        fields: [
          { name: "uploaded_by" },
        ]
      },
      {
        name: "directus_files_modified_by_foreign",
        using: "BTREE",
        fields: [
          { name: "modified_by" },
        ]
      },
      {
        name: "directus_files_folder_foreign",
        using: "BTREE",
        fields: [
          { name: "folder" },
        ]
      },
    ]
  });
};
