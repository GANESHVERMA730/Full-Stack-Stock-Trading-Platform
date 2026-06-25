const {Schema} = require("mongoose");

const PositionsSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  Price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = {PositionsSchema};