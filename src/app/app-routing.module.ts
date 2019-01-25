import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-files/department-list.component';
import { EmployeeListComponent } from './employee-files/employee-list.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'departments', component: DepartmentListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  TestComponent
]
