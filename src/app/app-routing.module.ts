import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './Auth.guard';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:"full"},
  {path:'login',loadChildren:'./login/login.module#LoginModule'},
  {path:'Users',component:UsersComponent},
  {path: 'profile', loadChildren:'./profile-set-up/profile-set-up.module#ProfileSetUpModule',canActivate : [AuthGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
