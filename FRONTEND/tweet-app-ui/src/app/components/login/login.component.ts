import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/loginService/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {

    if ((this.credentials.username != '' && this.credentials.password != '')
      && (this.credentials.username != null && this.credentials.password != null)
    ) {
      console.log("Submit the form");
      //generate token -> server side
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          //if success
          console.log(response.token);
          this.loginService.loginUser(response.token);

          this.loginService.setLoggedUser(this.credentials.username);
          window.location.href = "/dashboard"
        },
        error => {
          //if fails
          console.log(error);
        }
      )
    } else {
      console.log("Fields are empty!!!");
    }
  }

}
