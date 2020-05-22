import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LoginRoutingModule} from './login/login-routing.module';
import { AuthGuard } from './Auth.guard'; 
import {ProfileSetUpModule} from './profile-set-up/profile-set-up.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModuleModule} from './material-module/material-module.module';
import {JwtModule} from '@auth0/angular-jwt';
import {UsersComponent} from './users/users.component';
import * as CryptoJS from 'crypto-js';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LoginRoutingModule,
    ProfileSetUpModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    JwtModule
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
