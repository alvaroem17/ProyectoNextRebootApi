const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware");
const {
  newEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("./../controllers/employee.controller");

router.get("/", checkAuth, checkAdmin, getAllEmployees);
router.get("/:id", checkAuth, checkAdmin, getEmployee);
router.post("/", checkAuth, checkAdmin, newEmployee);
router.put("/:id", checkAuth, checkAdmin, updateEmployee);
router.delete("/:id", checkAuth, checkAdmin, deleteEmployee);

module.exports = router;
