import { Component, OnInit } from '@angular/core';
import {RegistrationForm} from 'src/app/RegistrationForm';
import {LoginService} from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private _loginService:LoginService,private router:Router) { }
  public registrationForm = new RegistrationForm('','','','');
  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.registrationForm); 
    this._loginService.submitRegistrationInfo(this.registrationForm)
         .subscribe(
       data=>{
         console.log(data);
         if(data.message=="Successfully Registered")
         {
           this.router.navigate(['/login']);
         }
        }
     )
  }
}
