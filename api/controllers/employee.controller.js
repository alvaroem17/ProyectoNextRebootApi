const Employee = require("./../models/employee.model");

const newEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const result = await employee.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    return res.status(200).json(employees);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.findById(req.params.id);
    return res.status(200).json(employees);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employees = await Employee.updateOne(
      { _id: req.params.id },
      req.body
    );
    return res.status(200).send("Updated successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employees = await Employee.deleteOne({ _id: req.params.id });
    return res.status(200).send("Deleted successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  newEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
