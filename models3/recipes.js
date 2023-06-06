const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipes', {
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
    recipe_product: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'product',
        key: 'id'
      },
      unique: "recipes_recipe_product_foreign"
    }
  }, {
    sequelize,
    tableName: 'recipes',
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
        name: "recipes_recipe_product_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recipe_product" },
        ]
      },
      {
        name: "recipes_user_updated_foreign",
        using: "BTREE",
        fields: [
          { name: "user_updated" },
        ]
      },
      {
        name: "recipes_user_created_foreign",
        using: "BTREE",
        fields: [
          { name: "user_created" },
        ]
      },
    ]
  });
};
