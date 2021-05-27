import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LoginService} from "../../services/loginService/login.service";
import {Response} from "../../models/Response";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    contacting: new FormControl('', Validators.maxLength(12))
  });

  registerUserData = {
    firstName: '',
    lastName: '',
    email: '',
    userId: '',
    password: '',
    contactNumber: ''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  registeredUser: Response | any

  onSubmit(){
    console.log("Submit the form");
    this.loginService.registerUser(this.registerUserData).subscribe(
      (response: any) => {
        //if success
        console.log(response.status);
        this.registeredUser = response;
        if(this.registeredUser.status == "true"){
          alert("Success!!! User is Registered with username" + this.registeredUser.userId+"/n Please Login...");
          console.log(this.registeredUser)
          window.location.href = "/login"
        }
        if (this.registeredUser.status == "false"){
          alert("Failed Message = "+ this.registeredUser.message);
          window.location.href = "/register"
        }
      },
      error => {
        //if fails
        console.log(error);
      }
    )
  }

  get email(){
    return this.registrationForm.get("email");
  }

}
