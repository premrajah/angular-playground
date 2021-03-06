import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-files/department-list.component';
import { EmployeeListComponent } from './employee-files/employee-list.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-files/department-detail.component';
import { DepartmentOverviewComponent } from './department-files/department-overview.component';
import { DepartmentContactComponent } from './department-files/department-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' }, // default
  { path: 'departments', component: DepartmentListComponent },
  { 
    path: 'departments/:id', 
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent}
    ]
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard route | always last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DepartmentListComponent,
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
  EmployeeListComponent,
  TestComponent,
  PageNotFoundComponent
]
