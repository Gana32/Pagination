const chai = require('chai');
const expect = chai.expect;
const employees = require('../src/model/employee');

describe('Employees Array', function() {
  it('should have 12 employees', function() {
    expect(employees).to.be.an('array').with.lengthOf(12);
  });

  it('should have id, name, and position properties for each employee', function() {
    employees.forEach(employee => {
      expect(employee).to.have.property('id');
      expect(employee).to.have.property('name');
      expect(employee).to.have.property('position');
    });
  });

  it('should filter employees by position', function() {
    const developers = employees.filter(emp => emp.position === 'Developer');
    const designers = employees.filter(emp => emp.position === 'Designer');
    const managers = employees.filter(emp => emp.position === 'Manager');

  //  expect(developers).to.have.lengthOf(4);
    expect(designers).to.have.lengthOf(4);
    expect(managers).to.have.lengthOf(4);
  });

  it('should find an employee by name and position', function() {
    const employee = employees.find(emp => emp.name === 'Alice' && emp.position === 'Developer');
    expect(employee).to.exist;
    expect(employee.id).to.equal(1);
  });

  it('should handle empty positions gracefully', function() {
    const interns = employees.filter(emp => emp.position === 'Intern');
    expect(interns).to.have.lengthOf(0);
  });
});
