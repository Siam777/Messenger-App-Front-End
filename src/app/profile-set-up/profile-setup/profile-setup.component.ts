import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.css']
})
export class ProfileSetupComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    // debugger
    // this._loginService.getUserData().subscribe(userInfo => {
    //   console.log(userInfo);
    // });
  }

}
