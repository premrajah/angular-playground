import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  template: `<div>
    <h2>Employee List</h2>
    <div>{{ errorMsg }}</div>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  </div>`,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg: any;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
  }

}
