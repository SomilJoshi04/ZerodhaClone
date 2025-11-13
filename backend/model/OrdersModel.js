const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const ordersModel = new model("order", OrdersSchema);

module.exports = { ordersModel };