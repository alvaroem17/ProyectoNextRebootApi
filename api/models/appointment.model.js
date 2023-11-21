const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  description: String,
  duration: {
    type: Number,
    required: true
  },
  customer: Schema.Types.ObjectId,
});

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
