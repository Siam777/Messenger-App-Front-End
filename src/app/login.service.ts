import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { $ } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 // url="http://localhost:59446/Registration/RegistrationSave";
 url = "http://localhost:59446/api/Login/";
  constructor(private http:HttpClient) { }
   _headers:HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/JSON'});
  
  submitRegistrationInfo(data):Observable<any>{
 // submitRegistrationInfo(data){
    console.log(data);
    let registration = {
     "Name":data.Name,
     "Email":data.Email,
     "Password":data.Password     
    }
   // var result = "http://localhost:59446/Registration/RegistrationSave?data="+"Siam";
    //return this.http.get<any>(this.url+'?data='+'Siam');
   // return this.http.get<any>(`${this.url}?data=Siam`);
   return this.http.post<any>(this.url+"RegistrationSave",registration,{headers:this._headers});
  }

  authorizationCheck(data){
    return this.http.get<any>(this.url+'Authorization?name='+data.UserName+'&password='+data.Password);
  }

  getUserData(){
    return this.http.get<any>(this.url+'GetProfileInfo');
  }
}
