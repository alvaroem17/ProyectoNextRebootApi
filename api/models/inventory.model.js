const { Schema, model } = require("mongoose");

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  supplier: Schema.Types.ObjectId,
});

const Inventory = model("Inventory", inventorySchema);

module.exports = Inventory;
