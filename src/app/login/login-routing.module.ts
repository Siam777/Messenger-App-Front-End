import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'',component:UserLoginComponent},
  {path:'registration',component:RegistrationFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
