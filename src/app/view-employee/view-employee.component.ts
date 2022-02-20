import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeUtilService } from '../employee-util.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeeId: any;

  employee: Employee = new Employee();

  constructor(private employeeUtilService: EmployeeUtilService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.employeeId = data.id;
      console.log(this.employeeId);
   });

   this.employeeUtilService.viewEmployee(this.employeeId).subscribe(data => {
    // this.employeeDetails = data;
       this.employee = data;
//  console.log(this.employeeDetails);
   });

  }

}
