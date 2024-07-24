const chai = require('chai');
const expect = chai.expect;
const { getPaginationEmployees } = require('../src/model/employee');

// Mock employees data for testing
const employees = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'Designer' },
  { id: 3, name: 'Charlie', position: 'Manager' },
  { id: 4, name: 'David', position: 'Developer' },
  { id: 5, name: 'Eve', position: 'Designer' },
  { id: 6, name: 'Frank', position: 'Manager' },
  { id: 7, name: 'Grace', position: 'Developer' },
  { id: 8, name: 'Hank', position: 'Designer' },
  { id: 9, name: 'Ivy', position: 'Manager' },
  { id: 10, name: 'Jack', position: 'Developer' },
  { id: 11, name: 'Karen', position: 'Designer' },
  { id: 12, name: 'Leo', position: 'Manager' }
];

describe('getPaginationEmployees', function() {
  it('should paginate employees correctly', function() {
    // Test with page 1 and limit 5
    const result = getPaginationEmployees(1, 5);
    expect(result).to.be.an('object');
    expect(result).to.have.property('page', 1);
    expect(result).to.have.property('limit', 5);
    expect(result).to.have.property('totalEmployees', employees.length);
    expect(result).to.have.property('totalPages', 3);
    expect(result.employees).to.be.an('array').with.lengthOf(5);

    // Test with page 2 and limit 5
    const resultPage2 = getPaginationEmployees(2, 5);
    expect(resultPage2).to.be.an('object');
    expect(resultPage2).to.have.property('page', 2);
    expect(resultPage2).to.have.property('limit', 5);
    expect(resultPage2).to.have.property('totalEmployees', employees.length);
    expect(resultPage2).to.have.property('totalPages', 3);
    expect(resultPage2.employees).to.be.an('array').with.lengthOf(5);

    // Test with page 3 and limit 5
    const resultPage3 = getPaginationEmployees(3, 5);
    expect(resultPage3).to.be.an('object');
    expect(resultPage3).to.have.property('page', 3);
    expect(resultPage3).to.have.property('limit', 5);
    expect(resultPage3).to.have.property('totalEmployees', employees.length);
    expect(resultPage3).to.have.property('totalPages', 3);
    expect(resultPage3.employees).to.be.an('array').with.lengthOf(2);
  });

  it('should handle edge cases gracefully', function() {
    // Test with page 4 and limit 5 (out of bounds)
    const resultPage4 = getPaginationEmployees(4, 5);
    expect(resultPage4).to.be.an('object');
    expect(resultPage4).to.have.property('page', 4);
    expect(resultPage4).to.have.property('limit', 5);
    expect(resultPage4).to.have.property('totalEmployees', employees.length);
    expect(resultPage4).to.have.property('totalPages', 3);
    expect(resultPage4.employees).to.be.an('array').with.lengthOf(0);

    // Test with page 1 and limit 15 (more than total employees)
    const resultPage1LargeLimit = getPaginationEmployees(1, 15);
    expect(resultPage1LargeLimit).to.be.an('object');
    expect(resultPage1LargeLimit).to.have.property('page', 1);
    expect(resultPage1LargeLimit).to.have.property('limit', 15);
    expect(resultPage1LargeLimit).to.have.property('totalEmployees', employees.length);
    expect(resultPage1LargeLimit).to.have.property('totalPages', 1);
    expect(resultPage1LargeLimit.employees).to.be.an('array').with.lengthOf(12);
  });
});
