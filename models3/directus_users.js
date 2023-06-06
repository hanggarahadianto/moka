const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_users', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: "directus_users_email_unique"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: true
    },
    avatar: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    theme: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "auto"
    },
    tfa_secret: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "active"
    },
    role: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_roles',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "directus_users_token_unique"
    },
    last_access: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_page: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "default"
    },
    external_identifier: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "directus_users_external_identifier_unique"
    },
    auth_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    email_notifications: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    newsletter: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'directus_users',
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
        name: "directus_users_external_identifier_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "external_identifier" },
        ]
      },
      {
        name: "directus_users_email_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "directus_users_token_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "directus_users_role_foreign",
        using: "BTREE",
        fields: [
          { name: "role" },
        ]
      },
    ]
  });
};
