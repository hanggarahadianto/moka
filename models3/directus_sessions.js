const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_sessions', {
    token: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_users',
        key: 'id'
      }
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_agent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    share: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_shares',
        key: 'id'
      }
    },
    origin: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'directus_sessions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "directus_sessions_user_foreign",
        using: "BTREE",
        fields: [
          { name: "user" },
        ]
      },
      {
        name: "directus_sessions_share_foreign",
        using: "BTREE",
        fields: [
          { name: "share" },
        ]
      },
    ]
  });
};
