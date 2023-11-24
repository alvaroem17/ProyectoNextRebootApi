const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: Number,
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (email) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  password: {
    type: String,
    required: true,
  }
});

const Customer = model("Customer", customerSchema);

module.exports = Customer;
