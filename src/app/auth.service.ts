import { Injectable,Input,Output,EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  logout() :void {
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
    this.setUserLoggedInStatus("Fail");
    }
    getUserLoggedInStatus() {
      //console.log('returning' + this.loggedInUser);
        //console.log(this.loggedInUser);
        return this.loggedInUser;
      }

      setUserLoggedInStatus(status: any) {
        console.log(status);
       //this.loggedInUser.next(status);
       this.loggedInUser.emit(status);
      }
}
