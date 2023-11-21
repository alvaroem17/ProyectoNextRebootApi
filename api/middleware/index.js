const jwt = require("jsonwebtoken");
const Employee = require("../models/employee.model");
const Customer = require("../models/customer.model");

function checkAuth(req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).send("Token not found");
  jwt.verify(
    req.headers.authorization,
    process.env.SECRET,
    async (err, result) => {
      if (err) return res.status(401).send("Token not valid");
      const employee = await Employee.findOne({ email: result.email });
      const customer = await Customer.findOne({ email: result.email });
      if (!employee && !customer) return res.status(401).send("User not found");
      if (employee) {
        res.locals.employee = employee;
      } else if (customer) {
        res.locals.customer = customer;
      }
      next();
    }
  );
}

function checkAdmin(req, res, next) {
  if (res.locals.employee.rol !== "Admin") {
    return res.status(401).send("User not authorized");
  } else {
    next();
  }
}

function checkEmail(req, res, next) {
  const regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexp.test(req.body.email)) {
    return res.status(401).send("checkEmail: Email not Valid");
  } else {
    next();
  }
}

function checkPassword(req, res, next) {
  const password = req.body.password;
  if (
    password.length < 8 ||
    password.match(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-={}|;:",.<>/?]).{8,}$;/
    )
  ) {
    return res.send("Your password is invalid");
  }
  next();
}

module.exports = {
  checkAuth,
  checkAdmin,
  checkEmail,
  checkPassword,
};
