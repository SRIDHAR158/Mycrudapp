import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeUtilService } from '../employee-util.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

          employeeId: any;
          // employees: Employee[] = [];
          // employeeDetails: any;
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

  updateEmployee(){
    this.employeeUtilService.updateEmployee(this.employeeId, this.employee).subscribe(data => {
      console.log(data);
       
    }, error => {
      console.log(error);
    });
      
    this.goToEmployeeList();  

  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }


}
