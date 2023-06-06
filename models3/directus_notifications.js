const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_notifications', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "inbox"
    },
    recipient: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    },
    sender: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    collection: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    item: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'directus_notifications',
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
        name: "directus_notifications_recipient_foreign",
        using: "BTREE",
        fields: [
          { name: "recipient" },
        ]
      },
      {
        name: "directus_notifications_sender_foreign",
        using: "BTREE",
        fields: [
          { name: "sender" },
        ]
      },
    ]
  });
};
