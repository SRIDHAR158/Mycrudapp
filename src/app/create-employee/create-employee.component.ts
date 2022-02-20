import { EmployeeUtilService } from './../employee-util.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  employeeDetails: any;
  constructor(private employeeUtilService: EmployeeUtilService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employee);
  }

  createEmployee(){
    this.employeeUtilService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.employeeDetails = data;
      console.log("Employee created " + this.employeeDetails);
    }, error => {
      console.log(error);
    });

    this.goToEmployeeList();

  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

}
