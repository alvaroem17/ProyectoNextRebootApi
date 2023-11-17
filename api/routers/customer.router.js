const router = require('express').Router()
const { newCustomer, getAllCustomers, getCustomer, updateCustomer, deleteCustomer } = require('./../controllers/customer.controller')


router.get('/', getAllCustomers)
router.get('/:id', getCustomer)
router.post('/', newCustomer)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

module.exports=router