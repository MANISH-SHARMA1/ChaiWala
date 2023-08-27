const router = require("express").Router();
const orderController = require("../controllers/ordersController");

router.post("/", orderController.orderController);

module.exports = router;
