// var db = require("../config/db");

// const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "customer_details",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      sort: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_created: {
        type: DataTypes.CHAR(36),
        allowNull: true,
        references: {
          model: "directus_users",
          key: "id",
        },
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      user_updated: {
        type: DataTypes.CHAR(36),
        allowNull: true,
        references: {
          model: "directus_users",
          key: "id",
        },
      },
      date_updated: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      first_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      date_created: "created_at",
      date_updated: "updated_at",
    }
  );
};
