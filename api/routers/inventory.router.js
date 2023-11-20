const router = require("express").Router();
const {
  newInventory,
  getAllInventories,
  getInventory,
  updateInventory,
  deleteInventory,
} = require("./../controllers/inventory.controller");

router.get("/", getAllInventories);
router.get("/:id", getInventory);
router.post("/", newInventory);
router.put("/:id", updateInventory);
router.delete("/:id", deleteInventory);

module.exports = router;
