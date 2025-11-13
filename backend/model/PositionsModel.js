const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");

const positionsModel = new model("position", PositionsSchema);

module.exports = { positionsModel };