import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard-landing/dashboard.component';
import {AppRoutingModule} from "../app-routing.module";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginService} from "./services/loginService/login.service";
import {AuthGuard} from "./services/authService/auth.guard";
import {AuthInterceptor} from "./services/authService/auth.interceptor";
import { RegistrationComponent } from './components/registration/registration.component';
import { TweetComponent } from './components/dashboard-element/tweet/tweet.component';
import {MatDividerModule} from '@angular/material/divider';
import { DashboardAllTweetsComponent } from './components/dashboard/dashboard-all-tweets/dashboard-all-tweets.component';
import { DashboardAllUsersComponent } from './components/dashboard/dashboard-all-users/dashboard-all-users.component';
import { UserComponent } from './components/dashboard-element/user/user.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ResetComponent } from './components/reset/reset.component';
import { SideNavComponent } from './components/dashboard-element/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    TweetComponent,
    DashboardAllTweetsComponent,
    DashboardAllUsersComponent,
    UserComponent,
    ResetComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [LoginService, AuthGuard,[{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi: true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
