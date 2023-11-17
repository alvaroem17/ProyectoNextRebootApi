const { Schema, model } = require('mongoose');

const supplierSchema = new Schema({
  name: String,
  phone: Number,
  email: String
});

const Supplier = model('Supplier', supplierSchema);

module.exports = Supplier;