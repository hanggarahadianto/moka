const path = require("path");
const express = require("express");

const orderController = require("../controllers/order");

const router = express.Router();

router.get("/", orderController.getOrder);
router.post("/", orderController.postOrder);

// router.get("/product", orderController.getProducts);
// router.get("/product_id/:id", orderController.getProductId);
router.get("/cart", orderController.getCart);

router.post("/cart", orderController.postCart);

module.exports = router;
