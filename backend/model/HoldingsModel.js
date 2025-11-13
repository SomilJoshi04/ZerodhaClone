const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const holdingsModel = new model("holding", HoldingsSchema);

module.exports = { holdingsModel };
