const Appointment = require("./../models/appointment.model");

const newAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    const result = await appointment.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate("customer").exec();
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateAppointment = async (req, res) => {
  try {
    await Appointment.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).send("Updated successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteAppointment = async (req, res) => {
  try {
    await Appointment.deleteOne({ _id: req.params.id });
    return res.status(200).send("Deleted successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAppointmentsDates = async (req, res) => {

  try {
    const date = new Date(req.params.date)
    const date1 = new Date(date)
    date1.setDate(date1.getDate()+7)
    console.log(date1)
    const appointments = await Appointment.find({
      date: { $gt: date, $lt: date1},
    }, {
      date:1, duration:1
    });
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  newAppointment,
  getAllAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentsDates
};
