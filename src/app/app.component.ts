import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';
import { ViewEncapsulation } from '@angular/core';
import { ProfileInfo} from './profileInfo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'personalApp';
  dataEmit;
  toggleSubMenu = false;
  constructor(private authService: AuthService, private _loginService: LoginService) { }

  ngOnInit(): void {
    this.checkLogin();
    this.authService.getUserLoggedInStatus().subscribe(data => {
      //this.dataEmit(data);
      console.log(data);
      if (data == "Success") {
        this.getUserData();
      }

    })
  }

  data = {
    "UserName": "",
    "TimeExpire": 0
  };

 // public profileInfo= new ProfileInfo('','','','','',null,'','',null,'Ravi');
 profileInfo = {
   UserName:''
 }
 public firstCharacter="";
  private getUserData() {
    //debugger;
    this._loginService.getUserData().
      subscribe(data => {
        console.log(data);
        this.profileInfo=data.Info;
        this.firstCharacter = this.profileInfo.UserName.charAt(0);
        console.log(this.profileInfo);
      })
  }
   private checkLogin() {
    this.data = JSON.parse(localStorage.getItem('token'));
    console.log(this.data);
    var timeNow = new Date().getTime();
    console.log(timeNow);
    console.log(this.data);
   // console.log(this.data.TimeExpire);
    if (this.data!=null &&localStorage.getItem('isLoggedIn') == "true" && timeNow < this.data.TimeExpire) {
      this.getUserData();
    }
  }
  
  //this.checkLogin;
  ////logout method
  logOut() {
    this.authService.logout();
  }

  toggle(){
    this.toggleSubMenu=!this.toggleSubMenu;
  }

  ////////////////////////////// 
  
}
