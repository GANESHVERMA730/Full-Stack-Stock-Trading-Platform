const {model} = require("mongoose");

const {positionsSchema} = required("../schemas/PositionsSchema");

const PositionsModel = new Model("position", PositionsSchema);

module.exports = {positionsModel};