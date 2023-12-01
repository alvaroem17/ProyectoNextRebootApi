const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware");
const {
  newAppointment,
  getAllAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentsDates
} = require("./../controllers/appointment.controller");

//appointments for customers
router.get("/forcustomers/:date", checkAuth, getAppointmentsDates);

router.get("/", checkAuth, checkAdmin, getAllAppointments);
router.get("/:id", checkAuth, checkAdmin, getAppointment);
router.post("/", checkAuth, checkAdmin, newAppointment);
router.put("/:id", checkAuth, checkAdmin, updateAppointment);
router.delete("/:id", checkAuth, checkAdmin, deleteAppointment);


module.exports = router;
