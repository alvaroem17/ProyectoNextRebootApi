const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
  name: String,
  phone: Number,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const Customer = model("Customer", customerSchema);

module.exports = Customer;
