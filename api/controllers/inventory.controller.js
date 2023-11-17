const Inventory = require("./../models/inventory.model");

const newInventory = async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    const result = await inventory.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find({});
    return res.status(200).json(inventories);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    return res.status(200).json(inventory);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateInventory = async (req, res) => {
  try {
    await Inventory.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).send("Updated successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteInventory = async (req, res) => {
  try {
    await Inventory.deleteOne({ _id: req.params.id });
    return res.status(200).send("Deleted successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  newInventory,
  getAllInventories,
  getInventory,
  updateInventory,
  deleteInventory,
};
