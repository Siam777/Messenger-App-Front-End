import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSetupComponent } from './profile-setup/profile-setup.component';
import {ProfileSetUpRoutingModule} from './profileSetUp-routing.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';



@NgModule({
  declarations: [ProfileSetupComponent, ProfileDetailsComponent],
  imports: [
    CommonModule,
    ProfileSetUpRoutingModule
  ]
})
export class ProfileSetUpModule { }
