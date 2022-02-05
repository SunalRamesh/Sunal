import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegFormComponent } from './reg-form/reg-form.component';


const routes: Routes = [
  {path:"register",component:RegFormComponent},
  {path:"login",component:LoginComponent},
  {path:"addEmployee",component:AddemployeeComponent},
  {path:"employee",component:EmployeeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
