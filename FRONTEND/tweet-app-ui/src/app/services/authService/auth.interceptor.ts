import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginService} from "../loginService/login.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private loginService:LoginService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let newReq = req;
    let token = this.loginService.getToken();
    console.log("INTERCEPTOR", token)

    if(token != null){
      newReq.clone({setHeaders:{
        Authorization: `Bearer ${token}`
        }})
    }
    return next.handle(newReq)
  }
}
