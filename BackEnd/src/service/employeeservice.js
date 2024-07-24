const employees = require("../model/employee");

const getPaginationEmployees = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedEmployees = employees.slice(startIndex, endIndex);

  return {
    page,
    limit,
    totalEmployees: employees.length,
    totalPages: Math.ceil(employees.length / limit),
    employees: paginatedEmployees,
  };
};

module.exports = {
  getPaginationEmployees,
};
