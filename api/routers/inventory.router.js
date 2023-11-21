const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware");
const {
  newInventory,
  getAllInventories,
  getInventory,
  updateInventory,
  deleteInventory,
} = require("./../controllers/inventory.controller");

router.get("/", checkAuth, checkAdmin, getAllInventories);
router.get("/:id", checkAuth, checkAdmin, getInventory);
router.post("/", checkAuth, checkAdmin, newInventory);
router.put("/:id", checkAuth, checkAdmin, updateInventory);
router.delete("/:id", checkAuth, checkAdmin, deleteInventory);

module.exports = router;
