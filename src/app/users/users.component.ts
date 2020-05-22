import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/common.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  Users=[];
   
  ngOnInit(): void {
    this.commonService.getUsers()
    .subscribe(data=>{
      console.log(data);
      this.Users = data;
    })
  }
  
}
