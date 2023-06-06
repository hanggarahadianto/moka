const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_roles', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "supervised_user_circle"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ip_access: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enforce_tfa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    admin_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    app_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'directus_roles',
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
    ]
  });
};
