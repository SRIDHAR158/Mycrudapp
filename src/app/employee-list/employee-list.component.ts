import { Router } from '@angular/router';
import { EmployeeUtilService } from './../employee-util.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

   employees: Employee[] = [];

  constructor(private employeeUtilService: EmployeeUtilService, private router: Router) { }

  ngOnInit(): void {
    // this.employees = [{
    //   "id": 1,
    //   "firstName": "Ramesh",
    //   "lastName": "Rao",
    //   "emailId": "ramesh@gmail.com"
    // },
  
    // {
    //   "id": 2,
    //   "firstName": "Suresh",
    //   "lastName": "Paul",
    //   "emailId": "suresh@ymail.com"
    // }];

    this.employeeUtilService.listEmployees().subscribe(data => {
      this.employees = data;
     });

  }
 

  updateEmployee(id: any){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: any){
    this.router.navigate(['delete-employee', id]);

  }

  viewEmployee(id: any){
    this.router.navigate(['view-employee', id]);
  }


}
