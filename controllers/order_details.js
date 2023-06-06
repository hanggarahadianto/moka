// const { models } = require("../sequelize");

const db = require("../models/index");

const order_details = db.order_details;

const getOrder = async (req, res) => {
  const data = await order_details.findAll();

  res.status(200).json(data);
};

module.exports = {
  getOrder,
};
