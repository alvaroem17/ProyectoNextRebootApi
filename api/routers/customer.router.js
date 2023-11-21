const router = require("express").Router();
const {
  checkAuth,
  checkAdmin,
  checkEmail,
  checkPassword,
} = require("../middleware");
const {
  newCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  addAppointment,
  getProfile,
  editProfile,
  getAppointments,
} = require("./../controllers/customer.controller");

//Especific routes for customers
router.get("/profile", checkAuth, getProfile);
router.put("/profile", checkAuth, editProfile);
router.get("/profile/appointments", checkAuth, getAppointments);
router.put("/profile/appointments", checkAuth, addAppointment); //add middleware to check auth

router.get("/", checkAuth, checkAdmin, getAllCustomers);
router.get("/:id", checkAuth, checkAdmin, getCustomer);
router.post("/", checkAuth, checkAdmin, checkEmail, checkPassword, newCustomer);
router.put("/:id", checkAuth, checkAdmin, updateCustomer);
router.delete("/:id", checkAuth, checkAdmin, deleteCustomer);

module.exports = router;
