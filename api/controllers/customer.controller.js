const Customer = require("./../models/customer.model");
const Appointment = require("./../models/appointment.model");

const newCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const result = await customer.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).send("Updated successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.deleteOne({ _id: req.params.id });
    return res.status(200).send("Deleted successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const addAppointment = async (req, res) => {
  try {
    const customer = await Customer.findById(
      req.params.id ? req.params.id : res.locals.customer._id
    );
    const appointment = new Appointment(req.body);
    appointment.customer = customer._id;
    const result = await appointment.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAppointments = async (req, res) => {
  try {
    const customer = await Appointment.find({
      customer: res.locals.customer._id,
    });
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getProfile = async (req, res) => {
  try {
    const customer = await Customer.findById(res.locals.customer._id);
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const editProfile = async (req, res) => {
  try {
    const result = await Customer.updateOne(
      { _id: res.locals.customer._id },
      req.body
    );
    return res.status(200).json("Updated successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  newCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  addAppointment,
  getProfile,
  editProfile,
  getAppointments,
};
