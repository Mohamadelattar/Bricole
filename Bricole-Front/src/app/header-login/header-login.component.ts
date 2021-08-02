import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
 
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
  constructor(public translate: TranslateService , private router:Router) {
    this.user.id = Number(localStorage.getItem("id"));
    this.user.nom = localStorage.getItem("nom");
    this.user.prenom = localStorage.prenom;
    this.user.email  = localStorage.getItem("email");
    this.name = localStorage.getItem("nom") + localStorage.getItem("prenom");
    translate.addLangs(['fr', 'ar']);
    translate.setDefaultLang('fr');
   }


   connected(){
    this.user.id = Number(localStorage.getItem("id"));
    this.user.nom = localStorage.getItem("nom");
    this.user.prenom = localStorage.prenom;
    this.user.email  = localStorage.getItem("email");
    this.name = localStorage.getItem("nom") + localStorage.getItem("prenom");
   }

  ngOnInit(): void {
    this.connected();
  }

  

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  logout()
  {
    localStorage.clear();
    console.log("Ich bin da");
    this.router.navigate(["/index"]);
  }
 

 

}
