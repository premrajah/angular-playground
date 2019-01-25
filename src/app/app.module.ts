import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AdvanceComponent } from './advance/advance.component';
import { EmployeeDetailComponent } from './employee-files/employee-detail.component';
import { EmployeeService } from './employee-files/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeDetailComponent,
    routingComponents,
    AdvanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
