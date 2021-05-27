import { Component, OnInit } from '@angular/core';
import {Response, TweetsEntity, User, AllUserResponse, UserEntity} from "../../../models/Response";
import {TweetService} from "../../../services/tweetService/tweet.service";
import {LoginService} from "../../../services/loginService/login.service";

@Component({
  selector: 'app-dashboard-all-users',
  templateUrl: './dashboard-all-users.component.html',
  styleUrls: ['./dashboard-all-users.component.css']
})
export class DashboardAllUsersComponent implements OnInit {

  allUser = new AllUserResponse();

  user = new Response();

  userList: UserEntity[] | UserEntity | any

  tweetList: TweetsEntity[] | TweetsEntity | any

  constructor(private tweetService: TweetService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.fetchUser();
    this.fetchAllUsers();
  }

  fetchAllUsers(){
    this.loginService.getAllUsers().subscribe(
      response =>{
        this.allUser = response;
        this.userList = this.allUser.allUsers
        //this.user = response;
        //this.userList = this.user.user;
        console.log(this.allUser)
      },
      error =>{
        console.log(error);

      }

    )
  }

  fetchUser() {
    console.log(this.loginService.getLoggedUser());
    this.tweetService.getUser(this.loginService.getLoggedUser())
      .subscribe(
        response => {
          //console.log(response);
          this.user = response;
        },
        error => {
          console.log(error);
        }
      )
  }

}
