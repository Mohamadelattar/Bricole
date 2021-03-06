import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

   

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token");
    //clone request
   request =  request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(request);
  }
}
