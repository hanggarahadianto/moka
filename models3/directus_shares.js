const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directus_shares', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    collection: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'directus_collections',
        key: 'collection'
      }
    },
    item: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'directus_roles',
        key: 'id'
      }
    },
    password: {
      type: DataTypes.STRING(255),
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
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    times_used: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    max_uses: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'directus_shares',
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
        name: "directus_shares_collection_foreign",
        using: "BTREE",
        fields: [
          { name: "collection" },
        ]
      },
      {
        name: "directus_shares_role_foreign",
        using: "BTREE",
        fields: [
          { name: "role" },
        ]
      },
      {
        name: "directus_shares_user_created_foreign",
        using: "BTREE",
        fields: [
          { name: "user_created" },
        ]
      },
    ]
  });
};
