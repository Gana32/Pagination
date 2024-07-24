 const chai = require('chai');
//const chai = await import('chai');

const sinon = require('sinon');
const { expect } = chai;

const employeeController = require('../src/controller/employeecontroller');
const employeeService = require('../src/service/employeeservice');

describe('Employee Controller', () => {
    describe('getPaginationEmployees', () => {
        it('should return paginated employees', async () => {
            const req = {
                query: {
                    page: 1,
                    limit: 5
                }
            };
            const res = {
                json: sinon.spy()
            };

            // Mock the employeeService.getPaginationEmployees method
            const mockResponse = {
                employees: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }],
                totalPages: 3,
                currentPage: 1
            };
            sinon.stub(employeeService, 'getPaginationEmployees').returns(mockResponse);

            // Call the controller function
            await employeeController.getPaginationEmployees(req, res);

            // Assert the response
            expect(res.json.calledOnce).to.be.true;
            expect(res.json.firstCall.args[0]).to.deep.equal(mockResponse);

            // Restore the original function after test
            employeeService.getPaginationEmployees.restore();
        });

        it('should use default values if page and limit are not provided', async () => {
            const req = {
                query: {}
            };
            const res = {
                json: sinon.spy()
            };

            // Mock the employeeService.getPaginationEmployees method
            const mockResponse = {
                employees: [{ id: 1, name: 'John Doe' }],
                totalPages: 1,
                currentPage: 1
            };
            sinon.stub(employeeService, 'getPaginationEmployees').returns(mockResponse);

            // Call the controller function
            await employeeController.getPaginationEmployees(req, res);

            // Assert the response
            expect(res.json.calledOnce).to.be.true;
            expect(res.json.firstCall.args[0]).to.deep.equal(mockResponse);

            // Restore the original function after test
            employeeService.getPaginationEmployees.restore();
        });
    });
});
