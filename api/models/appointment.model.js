const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  date: Date,
  description: String,
  duration: Number,
  materials: [Schema.Types.ObjectId],
});

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
