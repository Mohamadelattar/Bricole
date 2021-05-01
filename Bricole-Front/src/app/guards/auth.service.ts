import { Injectable } from '@angular/core';
import {   ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot  } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientService } from 'src/service/client.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor( private router: Router,private clientService: ClientService) {}
  canActivate():  boolean  {
      let token = localStorage.getItem("token");
      if(!token){
       this.router.navigateByUrl("/index");
       return false;

     }
     return true;
  }
}
