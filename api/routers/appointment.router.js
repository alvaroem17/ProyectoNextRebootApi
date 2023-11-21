const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware");
const {
  newAppointment,
  getAllAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
} = require("./../controllers/appointment.controller");

router.get("/", checkAuth, checkAdmin, getAllAppointments);
router.get("/:id", checkAuth, checkAdmin, getAppointment);
router.post("/", checkAuth, checkAdmin, newAppointment);
router.put("/:id", checkAuth, checkAdmin, updateAppointment);
router.delete("/:id", checkAuth, checkAdmin, deleteAppointment);

module.exports = router;
