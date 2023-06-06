const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    project_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Directus"
    },
    project_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    project_color: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    project_logo: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_files',
        key: 'id'
      }
    },
    public_foreground: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_files',
        key: 'id'
      }
    },
    public_background: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_files',
        key: 'id'
      }
    },
    public_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    auth_login_attempts: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 25
    },
    auth_password_policy: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    storage_asset_transform: {
      type: DataTypes.STRING(7),
      allowNull: true,
      defaultValue: "all"
    },
    storage_asset_presets: {
      type: DataTypes.JSON,
      allowNull: true
    },
    custom_css: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    storage_default_folder: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_folders',
        key: 'id'
      }
    },
    basemaps: {
      type: DataTypes.JSON,
      allowNull: true
    },
    mapbox_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    module_bar: {
      type: DataTypes.JSON,
      allowNull: true
    },
    project_descriptor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    translation_strings: {
      type: DataTypes.JSON,
      allowNull: true
    },
    default_language: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "en-US"
    },
    custom_aspect_ratios: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'directus_settings',
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
        name: "directus_settings_project_logo_foreign",
        using: "BTREE",
        fields: [
          { name: "project_logo" },
        ]
      },
      {
        name: "directus_settings_public_foreground_foreign",
        using: "BTREE",
        fields: [
          { name: "public_foreground" },
        ]
      },
      {
        name: "directus_settings_public_background_foreign",
        using: "BTREE",
        fields: [
          { name: "public_background" },
        ]
      },
      {
        name: "directus_settings_storage_default_folder_foreign",
        using: "BTREE",
        fields: [
          { name: "storage_default_folder" },
        ]
      },
    ]
  });
};
