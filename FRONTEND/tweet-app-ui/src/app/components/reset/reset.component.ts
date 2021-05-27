import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/loginService/login.service";
import {Response} from "../../models/Response";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  resetForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  })

  resetData = {
    email: '',
    password: ''
  }
  status: String | undefined;
  resetResponse = new Response();

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.resetForm)
    this.loginService.resetPasswordWithEmail(this.resetData).subscribe(
      response => {
        this.resetResponse = response;
        this.status = this.resetResponse.status;
        console.log(this.status)
        if(this.status == "true"){
          alert("Password Has been reset, Please Login Again!!!")
          window.location.href = "/login"
        }
        if(this.status == "false"){
          alert("Email is incorrect, try again!!!")
          window.location.href = "/reset"
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  get email(){
    return this.resetForm.get("email");
  }

}
