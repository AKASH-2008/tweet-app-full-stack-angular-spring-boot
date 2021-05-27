import { Component, OnInit } from '@angular/core';
import {Response, TweetsEntity} from "../../../models/Response";
import {TweetService} from "../../../services/tweetService/tweet.service";
import {LoginService} from "../../../services/loginService/login.service";

@Component({
  selector: 'app-dashboard-all-tweets',
  templateUrl: './dashboard-all-tweets.component.html',
  styleUrls: ['./dashboard-all-tweets.component.css']
})
export class DashboardAllTweetsComponent implements OnInit {

  tweets = new Response();

  user = new Response();

  tweet = new TweetsEntity();

  tweetList: TweetsEntity[] | TweetsEntity | any

  constructor(private tweetService: TweetService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.fetchAllTweet();
    this.fetchUser();
  }

  fetchAllTweet() {
    this.tweetService.getAllTweets()
      .subscribe(
        response => {
          //console.log(response);
          this.tweets = response;
          this.tweetList = this.tweets.tweets;
          console.log(this.tweetList)
        },
        error => {
          console.log(error);
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
