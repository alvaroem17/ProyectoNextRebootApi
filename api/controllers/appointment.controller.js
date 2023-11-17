const Appointment = require('./../models/appointment.model');

const newAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body)
        const result = await appointment.save()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({})
        return res.status(200).json(appointments)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
        return res.status(200).json(appointment)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateAppointment = async (req, res) => {
    try {
        await Appointment.updateOne({"_id": req.params.id}, req.body)
        return res.status(200).send("Updated successfully")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteAppointment = async (req, res) => {
    try {
        await Appointment.deleteOne({"_id": req.params.id})
        return res.status(200).send("Deleted successfully")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    newAppointment,
    getAllAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
}