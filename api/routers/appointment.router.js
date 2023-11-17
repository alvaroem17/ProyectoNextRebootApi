const router = require('express').Router()
const { newAppointment, getAllAppointments, getAppointment, updateAppointment, deleteAppointment } = require('./../controllers/appointment.controller')


router.get('/', getAllAppointments)
router.get('/:id', getAppointment)
router.post('/', newAppointment)
router.put('/:id', updateAppointment)
router.delete('/:id', deleteAppointment)

module.exports=router