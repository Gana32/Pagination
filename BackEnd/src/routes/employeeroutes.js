const express = require('express');
const router= express.Router();
const employeeController = require('../controller/employeecontroller');

router.get('/', employeeController.getPaginationEmployees);

module.exports = router;

