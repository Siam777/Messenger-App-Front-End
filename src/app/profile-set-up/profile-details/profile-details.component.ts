import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/login.service';
import {ProfileInfo} from '../../profileInfo';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private _loginService:LoginService) { }
  //profileInfo =new ProfileInfo('','','','','',null,'','',null,'');
  profileInfo={
    "UserName":"",
    "ImagePath":""
  }
  public firstCharacter="";
  ngOnInit(): void {
      this._loginService.getUserData()
      .subscribe(
        data=>{
          console.log(data);
          this.profileInfo=data.Info;
          this.firstCharacter = this.profileInfo.UserName.charAt(0);
        }
      )
  }

}
