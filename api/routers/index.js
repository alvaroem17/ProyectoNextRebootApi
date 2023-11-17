const router = require('express').Router()

router.use('/employees', require('./employee.router.js'))
router.use('/customers', require('./customer.router.js'))
router.use('/appointments', require('./appointment.router.js'))

module.exports = router