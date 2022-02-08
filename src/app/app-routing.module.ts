import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddemployeeComponent} from './addemployee/addemployee.component';
import {LoginComponent} from './login/login.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
