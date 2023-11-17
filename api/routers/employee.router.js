const router = require('express').Router()
const { newEmployee, getAllEmployees,getEmployee,updateEmployee,deleteEmployee } = require('./../controllers/employee.controller')


router.get('/',getAllEmployees)
router.get('/:id', getEmployee)
router.post('/',newEmployee)
router.put('/:id',updateEmployee)
router.delete('/:id',deleteEmployee)

module.exports=router