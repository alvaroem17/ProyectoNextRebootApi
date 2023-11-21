const { Schema, model } = require("mongoose");

const supplierSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
});

const Supplier = model("Supplier", supplierSchema);

module.exports = Supplier;
