import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {LoginRoutingModule} from './login-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import {MaterialModuleModule} from '../material-module/material-module.module';
// import {JwtModule} from '@auth0/angular-jwt';
@NgModule({
  declarations: [RegistrationFormComponent, UserLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    //JwtModule
  ]
})
export class LoginModule { }
