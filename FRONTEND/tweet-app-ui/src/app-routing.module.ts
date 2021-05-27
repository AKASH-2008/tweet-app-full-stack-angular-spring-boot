import { NgModule } from '@angular/core';
import {Routes, RouterModule } from "@angular/router";
import {HomeComponent} from "./app/components/home/home.component";
import {LoginComponent} from "./app/components/login/login.component";
import {DashboardComponent} from "./app/components/dashboard/dashboard-landing/dashboard.component";
import {AuthGuard} from "./app/services/authService/auth.guard";
import {RegistrationComponent} from "./app/components/registration/registration.component";
import {DashboardAllUsersComponent} from "./app/components/dashboard/dashboard-all-users/dashboard-all-users.component";
import {DashboardAllTweetsComponent} from "./app/components/dashboard/dashboard-all-tweets/dashboard-all-tweets.component";
import {ResetComponent} from "./app/components/reset/reset.component";


 const routes: Routes = [
   {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
   },
   {
     path: 'login',
     component: LoginComponent,
     pathMatch: 'full'
   },
   {
      path: 'register',
     component: RegistrationComponent,
     pathMatch: 'full'
   },
   {
     path: 'dashboard',
     component: DashboardComponent,
     pathMatch: 'full',
     canActivate: [AuthGuard]
   },
   {
     path: 'dashboard/users',
     component: DashboardAllUsersComponent,
     pathMatch: 'full',
     canActivate: [AuthGuard]
   },
   {
     path: 'dashboard/tweets',
     component: DashboardAllTweetsComponent,
     pathMatch: 'full',
     canActivate: [AuthGuard]
   },
   {
     path: 'reset',
     component: ResetComponent,
     pathMatch: 'full'
   }

 ]

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
export class AppRoutingModule{

 }
