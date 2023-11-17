const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
  name: String,
  phone: Number,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: String,
  rol: String
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;