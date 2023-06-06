const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xendit_qr', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_created: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_updated: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    externalID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.JSON,
      allowNull: true
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "IDR"
    },
    callbackURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expires_at: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xendit_qr',
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
        name: "xendit_qr_user_created_foreign",
        using: "BTREE",
        fields: [
          { name: "user_created" },
        ]
      },
      {
        name: "xendit_qr_user_updated_foreign",
        using: "BTREE",
        fields: [
          { name: "user_updated" },
        ]
      },
    ]
  });
};
