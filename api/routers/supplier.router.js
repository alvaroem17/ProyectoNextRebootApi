const router = require("express").Router();
const {
  newSupplier,
  getAllSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier,
} = require("./../controllers/supplier.controller");

router.get("/", getAllSuppliers);
router.get("/:id", getSupplier);
router.post("/", newSupplier);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);

module.exports = router;
