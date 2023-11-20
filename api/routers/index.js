const router = require("express").Router();

router.use("/employees", require("./employee.router.js"));
router.use("/customers", require("./customer.router.js"));
router.use("/appointments", require("./appointment.router.js"));
router.use("/suppliers", require("./supplier.router.js"));
router.use("/inventories", require("./inventory.router.js"));
router.use("/auth", require("./auth.router.js"));

module.exports = router;
