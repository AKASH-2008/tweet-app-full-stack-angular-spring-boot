import { Component, OnInit, Input } from '@angular/core';
import {TweetsEntity} from "../../../models/Response";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: TweetsEntity | any

  tweetPayload = {
    author: '',
    _id:'',
    tweet:''
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.tweet)
  }

  likeTweet(){
    this.tweetPayload.author = this.tweet.author;
    this.tweetPayload._id = this.tweet._id;
    this.tweetPayload.tweet = this.tweet.tweet;
    console.log(this.tweetPayload);
  }

  reply(){
  console.log();
}

}
