const { Schema, model } = require("mongoose");

const inventorySchema = new Schema({
  name: String,
  quantity: Number,
  price: Number,
  supplier: Schema.Types.ObjectId,
});

const Inventory = model("Inventory", inventorySchema);

module.exports = Inventory;
