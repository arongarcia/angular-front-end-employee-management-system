import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

  //   this.employees = [
  //     {
  //       "id": 1,
  //       "firstName": "Aron",
  //       "lastName": "Garcia",
  //       "emailId": "aron@gmail.com"
  //     },
  //     {
  //       "id": 2,
  //       "firstName": "Juan",
  //       "lastName": "Dela",
  //       "emailId": "juan@gmail.com"
  //     }
  // ]
  this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number | undefined ){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number | undefined ){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number | undefined){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    });
  }
}
