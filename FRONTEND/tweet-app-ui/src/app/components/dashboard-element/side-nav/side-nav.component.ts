import { Component, OnInit } from '@angular/core';
import {TweetService} from "../../../services/tweetService/tweet.service";
import {LoginService} from "../../../services/loginService/login.service";
import {Response} from "../../../models/Response";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  user = new Response();

  constructor(private tweetService: TweetService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.fetchUser()
  }

  fetchUser() {
    console.log(this.loginService.getLoggedUser());
    this.loginService.getUser(this.loginService.getLoggedUser())
      .subscribe(
        response => {
          console.log(response);
          this.user = response;
        },

        error => {
          console.log(error);
        }
      )
  }

}
