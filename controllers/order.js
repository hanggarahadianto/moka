const db = require("../models/index");

const { sequelize, order, customer_details, product, order_details } = require("../models");

// ----------------------------------------------------

exports.getOrder = async (req, res) => {
  const orderData = await order.findAll();
  res.status(200).json(orderData);
};

const getProducts = async (req, res) => {
  try {
    const productData = await product.findAll();
    res.status(200).json(productData);
  } catch (error) {
    console.log(error);
  }
};

const getProductId = (req, res) => {
  product
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((product_idData) => res.json(product_idData))
    .catch((error) => {
      res.send({ message: "product id doesn't exist" });
    });
};

exports.getCart = (req, res) => {
  order_details
    .findAll()
    .then((Carts) => res.json(Carts))
    .catch((error) => {
      res.send(error);
    });
};

exports.postCart = async (req, res) => {
  try {
    const { quantity, product_price } = req.body;
    const newCart = await order_details.create({
      order_id: req.body.order_id,
      product_id: req.body.product_id,
      quantity: quantity,
      product_price: product_price,
      total: parseInt(product_price * quantity),
    });
    res.json(newCart);
  } catch (error) {
    console.log(error);
  }
};

exports.postOrder = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { payment, customer } = req.body;
    const newCustomer = await customer_details.create(
      {
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
        phone: customer.phone,
      },
      { transaction }
    );

    const newOrder = await order.create(
      {
        customer: newCustomer.id,
        payment: payment.id,
      },
      { transaction }
    );

    const cartToCheckout = req.body.order_details;
    const cartSplit = {};

    for (let i = 0; i < cartToCheckout.length; i++) {
      cartSplit[i] = cartToCheckout[i];

      // console.log(cartSplit);

      const product_details = await product.findOne({ where: { id: cartSplit[i].product_id } });

      const get_product_details_price = product_details.price;

      const product_id = cartSplit[i].product_id;
      const quantity = cartSplit[i].quantity;
      const product_price = get_product_details_price;

      const cartData = {
        order_id: newOrder.id,
        product_id: product_id,
        quantity: quantity,
        product_price: product_price,
        total: parseInt(product_price * quantity),
      };

      await order_details.create(cartData, { transaction });
    }

    console.log("new order created");
    await transaction.commit();
    res.json(newOrder);
  } catch (error) {
    console.log(error);
    res.send({
      message: "gagal",
    });
  }

  // try {
  //   const { payment, customer } = req.body;
  //   const newCustomer = await customer_details.create(
  //     {
  //       first_name: customer.first_name,
  //       last_name: customer.last_name,
  //       email: customer.email,
  //       phone: customer.phone,
  //     },
  //     { transaction }
  //   );

  //   const newOrder = await order.create(
  //     {
  //       customer: newCustomer.id,
  //       payment: payment.id,
  //     },
  //     { transaction }
  //   );

  //   const cartToCheckout = req.body.order_details;
  //   const cartSplit = {};

  //   for (let i = 0; i < cartToCheckout.length; i++) {
  //     cartSplit[i] = cartToCheckout[i];

  //     const product_id = cartSplit[i].product_id;
  //     const quantity = cartSplit[i].quantity;
  //     const product_price = cartSplit[i].product_price;

  //     // const productId = await product.findOne({
  //     //   where: {
  //     //     id: cartSplit[i].product_id,
  //     //   },
  //     // });

  //     const cartData = {
  //       order_id: newOrder.id,
  //       // product_id: product_id,
  //       product_id: product_id,
  //       quantity: quantity,
  //       product_price: product_price,
  //       total: parseInt(product_price * quantity),
  //     };

  //     await order_details.create(cartData, { transaction });
  //   }

  //   console.log("new order created");
  //   await transaction.commit();
  //   res.json(newOrder);
  // } catch (error) {
  //   console.log(error);
  //   res.send({
  //     message: "gagal",
  //   });
  // }
};
