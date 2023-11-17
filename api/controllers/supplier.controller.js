const Supplier = require('./../models/supplier.model');

const newSupplier = async (req, res) => {
    try {
        const supplier = new Supplier(req.body)
        const result = await supplier.save()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find({})
        return res.status(200).json(suppliers)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id)
        return res.status(200).json(supplier)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateSupplier = async (req, res) => {
    try {
        await Supplier.updateOne({"_id": req.params.id}, req.body)
        return res.status(200).send("Updated successfully")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteSupplier = async (req, res) => {
    try {
        await Supplier.deleteOne({"_id": req.params.id})
        return res.status(200).send("Deleted successfully")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    newSupplier,
    getAllSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier
}