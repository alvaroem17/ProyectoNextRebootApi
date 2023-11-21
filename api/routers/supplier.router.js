const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware");
const {
  newSupplier,
  getAllSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier,
} = require("./../controllers/supplier.controller");

router.get("/", checkAuth, checkAdmin, getAllSuppliers);
router.get("/:id", checkAuth, checkAdmin, getSupplier);
router.post("/", checkAuth, checkAdmin, newSupplier);
router.put("/:id", checkAuth, checkAdmin, updateSupplier);
router.delete("/:id", checkAuth, checkAdmin, deleteSupplier);

module.exports = router;
