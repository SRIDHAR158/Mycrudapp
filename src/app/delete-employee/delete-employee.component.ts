import { EmployeeUtilService } from './../employee-util.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employeeId: any;

  constructor(private employeeUtilService: EmployeeUtilService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.employeeId = data.id;
      console.log(this.employeeId);


    this.employeeUtilService.deleteEmployee(this.employeeId).subscribe(data => {
        console.log(data);
        this.goToEmployeeList();
      },
    error => {
      console.log(error);
    });

    // this.goToEmployeeList();

   });

  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

}
