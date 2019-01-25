import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor() { }

  public getEmployees() {
    return [
      { "id": 1, "name": "Andrew", "age": 30 },
      { "id": 2, "name": "Prem", "age": 31 },
      { "id": 3, "name": "Paul", "age": 32 },
      { "id": 4, "name": "Michael", "age": 20 },
      { "id": 5, "name": "Venom", "age": 23 }
    ];
  }
}
