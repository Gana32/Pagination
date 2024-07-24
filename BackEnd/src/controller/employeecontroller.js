const employeeService = require('../service/employeeservice');

const getPaginationEmployees = (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const response = employeeService.getPaginationEmployees(page, limit);

    res.json(response);
}

module.exports = {
    getPaginationEmployees
}