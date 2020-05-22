import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileSetupComponent} from './profile-setup/profile-setup.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
const routes: Routes = [
  {path:'',component:ProfileDetailsComponent},
  {path:'setup',component:ProfileSetupComponent}
//   {path:'registration',component:RegistrationFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileSetUpRoutingModule { }
