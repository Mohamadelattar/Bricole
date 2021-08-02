import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/service/client.service';
import { FreelancerService } from 'src/service/freelancer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    'pseudo' : new FormControl(null,[Validators.required, Validators.minLength(5)]),
    'nom' : new FormControl(null,[Validators.required, Validators.minLength(5)]),
    'prenom' : new FormControl(null,[Validators.required, Validators.minLength(5)]),
    'password' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'telephone' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'filename':new FormControl("https://img.icons8.com/bubbles/2x/4a90e2/user-male.png", [Validators.required, Validators.minLength(5)]),

    });
  serverErrors = [];
  isForm = true;
  accountType : string;
  constructor(
    private clientService:ClientService,
    private freelancerService:FreelancerService,
    private router:Router,
  ) { }
    
  ngOnInit(): void {
  }

  register()
  {     
      if(this.accountType == "Client"){
        this.clientService.Register(this.registerForm.value).subscribe(res => {
          console.log(res);
          /*
          localStorage.setItem('token',res[0]);
          localStorage.setItem('id',res[1].id);
          localStorage.setItem('nom',res[1].nom);
          localStorage.setItem('prenom',res[1].prenom);
          localStorage.setItem('email',res[1].email);
          localStorage.setItem('pseudo',res[1].pseudo);
          localStorage.setItem('telephone',res[1].telephone);
          localStorage.setItem('accaountType',this.accountType);
          if(res[0])
          {
              this.router.navigate(['client-dash']);
          }*/
        });  

      }
      else if(this.accountType == "Freelancer") {
        this.freelancerService.Register(this.registerForm.value).subscribe(res => {

          console.log(res);
          /*
          localStorage.setItem('token',res[0]);
          localStorage.setItem('id',res[1].id);
          localStorage.setItem('nom',res[1].nom);
          localStorage.setItem('prenom',res[1].prenom);
          localStorage.setItem('email',res[1].email);
          localStorage.setItem('pseudo',res[1].pseudo);
          localStorage.setItem('telephone',res[1].telephone);
          localStorage.setItem('accaountType',this.accountType);
          if(res[0])
          {
              this.router.navigate(['freelancer-dash']);
          }*/
        });  
      }
      
  }

  freelancer(){
    
    this.accountType = "Freelancer";
    console.log(this.accountType);
    this.isForm = false;
  }

  client () {
    
    this.accountType = "Client";

    console .log(this.accountType);
    this.isForm = false;
  }

}
