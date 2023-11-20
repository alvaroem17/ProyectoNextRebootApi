const Employee = require('../models/employee.model')
const Customer = require('../models/customer.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function login(req, res) {
    try {
        const employee = await Employee.findOne({email: req.body.email})
        const customer = await Customer.findOne({email: req.body.email})

        if (!employee && !customer) return res.status(404).send('Error: Email  incorrect')

        
        if(employee){
            const comparePassEmployee = bcrypt.compareSync(req.body.password, employee.password)
            if (comparePassEmployee) {
                const payload = {
                    email: employee.email
                }
                const token = jwt.sign(payload, process.env.SECRET, {
                    expiresIn: '1h'
                })
                return res.status(200).json({
                    token
                })
            } else {
                return res.status(404).json('Error: Email or Password incorrect')
            }
        }else if(customer){
            const comparePassCustomer = bcrypt.compareSync(req.body.password, customer.password)
            if (comparePassCustomer) {
                const payload = {
                    email: customer.email
                }
                const token = jwt.sign(payload, process.env.SECRET, {
                    expiresIn: '1h'
                })
                return res.status(200).json({
                    token
                })
            } else {
                return res.status(404).json('Error: Email or Password incorrect')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



async function signUp(req, res) {
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds) 

    req.body.password = hashedPassword 
    req.body.roleId = 1

    try {
        const customer = new Customer(req.body)
        await customer.save()
        const payload = {
            email: customer.email
        }
        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1h'
        })
        return res.status(200).json({
            token
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    login,
    signUp
}