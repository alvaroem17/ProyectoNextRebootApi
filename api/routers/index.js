const router = require('express').Router()

router.use('/employees', require('./employee.router.js'))
router.use('/customers', require('./customer.router.js'))

module.exports = router