import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import{LoginService} from 'src/app/login.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
//import * as CryptoJS from 'crypto-js';
//import {JWtToken} from '../../TokenCreate';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private _loginService:LoginService,private router:Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    
    this.authService.logout();
  }
  
  response;
  loginForm = this.fb.group({
    UserName:['',Validators.required],
    Password:['',Validators.required]
  })
  token = {};
  OnSubmit(){
    console.log(this.loginForm);
    this._loginService.authorizationCheck(this.loginForm.value)
    .subscribe(data=> {if(data!=null && data.status=="Authorized"){
      localStorage.setItem('isLoggedIn', "true");  
      console.log(new Date().getTime());
      this.token = {
        "UserName":this.loginForm.value.UserName,
        "TimeExpire":new Date().getTime()+600000
      }
       // var access_token = JWtToken();
      // console.log(JWtToken);

      const helper = new JwtHelperService();
      // const newDecodedToken = helper.decodeToken(access_token);
      const decodedToken = helper.decodeToken(data.Info);
      console.log(decodedToken);
      //console.log(jwt_decode(data.Info));
    //  var token = this.jwt.sign({userID: user.id}, {expiresIn: '2h'});
     // const jwtBearerToken = jwt.sign
      localStorage.setItem('token', JSON.stringify(this.token));
      this.authService.setUserLoggedInStatus("Success");
      this.router.navigate(['/Users']);
    }}
    
    );
    
  }
}
