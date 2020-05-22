import { Injectable } from '@angular/core';      
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';      
import { Observable } from 'rxjs';      
@Injectable({      
   providedIn: 'root'      
})      
export class AuthGuard implements CanActivate {      
    constructor(private router: Router) { }      
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
       if (this.isLoggedIn()) {      
       return true;      
       }      
       // navigate to login page as user is not authenticated      
    this.router.navigate(['/login']);      
 return false;      
 }      
 data={
    "UserName":"",
    "TimeExpire":0
 };
 public isLoggedIn(): boolean {      
    let status = false;  
        
    this.data= JSON.parse(localStorage.getItem('token'));
    var timeNow = new Date().getTime();
    console.log(timeNow);
    console.log(this.data);
    //console.log(this.data.TimeExpire);
    if (this.data!=null &&localStorage.getItem('isLoggedIn') == "true" && timeNow<this.data.TimeExpire) {      
       status = true;      
    }    
    else {      
       status = false;      
       }      
    return status;      
    }    
 }    