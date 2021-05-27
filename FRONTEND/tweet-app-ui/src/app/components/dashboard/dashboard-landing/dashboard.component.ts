import {Component, OnInit} from '@angular/core';
import {TweetService} from "../../../services/tweetService/tweet.service";
import {LoginService} from "../../../services/loginService/login.service";
import {Response} from "../../../models/Response";
import {TweetsEntity} from "../../../models/Response";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  user = new Response();

  tweetMessage: string | any;

  tweetList: TweetsEntity[] | any

  constructor(private tweetService: TweetService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.fetchUser();
  }

  postTweet() {
    console.log(this.tweetMessage);
    console.log(this.loginService.getLoggedUser())
    this.tweetService.postTweet(this.tweetMessage, this.loginService.getLoggedUser()).subscribe(
      response => {
        alert("Success!!! Tweet Successful")
        window.location.href = "/dashboard"
      },
      error => {
        console.log(error)
      }
    )
  }


  fetchUser() {
    console.log(this.loginService.getLoggedUser());
    this.tweetService.getUser(this.loginService.getLoggedUser())
      .subscribe(
        response => {
          console.log(response);
          this.user = response;
          this.tweetList = this.user.user?.tweets;
          console.log(this.tweetList);
        },

        error => {
          console.log(error);
        }
      )
  }

}
