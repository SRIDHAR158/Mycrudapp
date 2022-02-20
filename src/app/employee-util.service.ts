import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeUtilService {

  private baseUrl: string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  listEmployees(): Observable<Employee[]>{
    //  return this.http.get<User[]>(this.baseUrl + 'users');
    return this.httpClient.get<Employee[]>(this.baseUrl + 'empl/all employees');
  }

  viewEmployee(id: any):Observable<Employee>{
    //  return this.http.get<User[]>(this.baseUrl + 'users/' + id);
    return this.httpClient.get<Employee>(this.baseUrl + 'empl/employees/' + id);
 }

  addEmployee(employeeObj: any):Observable<Employee[]>{
    // return this.http.post<User[]>(this.baseUrl + 'users', userObj);
    return this.httpClient.post<Employee[]>(this.baseUrl + 'empl/employees', employeeObj);
  }

  updateEmployee(id: any, employeeObj: any):Observable<Employee[]>{
    // return this.http.put<User[]>(this.baseUrl + 'users/'+ id, userObj);
    return this.httpClient.put<Employee[]>(this.baseUrl + 'empl/employees/edit/'+ id, employeeObj);
  }

  deleteEmployee(id: any):Observable<Employee>{
    // return this.http.delete<User[]>(this.baseUrl + 'users/' + id);
    return this.httpClient.delete<Employee>(this.baseUrl + 'empl/employees/delete/'+ id);
  }



}
