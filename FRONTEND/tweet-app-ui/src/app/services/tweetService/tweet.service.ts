import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  baseUrl = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  getUser(username: string | any): Observable<any>{
      return this.http.get(`${this.baseUrl}/users/search/${username}`);
    }

    getAllTweets():Observable<any>{
      return this.http.get(`${this.baseUrl}/tweets/all`);
    }


  postTweet(tweetMessage: any, loggedUser: string | null): Observable<any>{
      return this.http.post(`${this.baseUrl}/${loggedUser}/add`, {createNewTweet: {tweet: tweetMessage}})
  }
}
