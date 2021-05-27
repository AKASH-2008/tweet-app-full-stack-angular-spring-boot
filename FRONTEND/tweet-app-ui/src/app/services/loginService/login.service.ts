import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  //fetch side user Details
  getUser(username: string | any): Observable<any>{
    return this.http.get(`${this.url}/users/search/${username}`);
  }
  //reset Password
  resetPasswordWithEmail(resetData: any): Observable<any> {
    return this.http.post(`${this.url}/forgot`, {saveUser: resetData});

  }
  //fetch all Users
  getAllUsers():Observable<any>{
    return this.http.get(`${this.url}/users/all`);
  }

  //register Methods
  registerUser(saveUser: any){
    //calling http post method to save user//register user
    //console.log(saveUser);
    return this.http.post(`${this.url}/register`, {saveUser: saveUser});
  }
//
  //Login Methods
  generateToken(credentials:any){
    //calling server to generate token
    return this.http.post(`${this.url}/token`, credentials)
  }

  //calling server to generate token

  //for login user
  loginUser(token: string){
    localStorage.setItem("token", token)
    return true;
  }

  setLoggedUser(username: string){
    localStorage.setItem("username", username)
  }

  getLoggedUser(){
    return localStorage.getItem("username")
  }

  removeLoggedUser(){
    localStorage.removeItem("username")
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token == undefined || token == '' || token == null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem("token");
    this.removeLoggedUser();
    return true;
  }

  //for getting token

  getToken(){
    return localStorage.getItem("token");
  }

}
