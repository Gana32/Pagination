import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems!: number;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadEmployees();
  
  }

  // loadEmployees() {
  //   this.employeeService.getEmployees(this.currentPage, this.itemsPerPage).subscribe((response: { data: any[]; total: number; }) => {
  //     this.employees = response.data;
  //     console.log(response.data);
  //     this.totalItems = response.total; // Assuming your backend returns the total number of items
  //     console.log(response.total)
  //   });
  // }

  loadEmployees() {
    this.employeeService.getEmployees(this.currentPage, this.itemsPerPage).subscribe((response) => {
      this.employees = response.employees;
      console.log(response);
      console.log(response.employees);
      this.totalItems = response.total; // Assuming your backend returns the total number of items
      console.log(response.total)
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadEmployees();
  }
}
