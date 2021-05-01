import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
 
export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
}
@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {
  
  user : User = {
    id : undefined,
    nom: undefined,
    prenom: undefined ,
    email: undefined,
  };

  name: string;
  constructor() {
    this.user.id = Number(localStorage.getItem("id"));
    console.log(Number(localStorage.getItem("id")));
    this.user.nom = localStorage.getItem("nom");
    console.log(localStorage.getItem("nom"));
    this.user.prenom = localStorage.prenom;
    console.log(localStorage.prenom);
    this.user.email  = localStorage.getItem("email");
    console.log(localStorage.getItem("email"));
    this.name = localStorage.getItem("nom") + localStorage.getItem("prenom");
   }

  ngOnInit(): void {

  }

 

 

}
