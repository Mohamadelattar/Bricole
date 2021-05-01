import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/service/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  serverErrors = [];

  constructor(
    private clientService:ClientService,
    private router:Router,
  ) { }
    
  ngOnInit(): void {
  }

  login()
  {
   
      this.clientService.login(this.loginForm.value).subscribe(res => {
        localStorage.setItem('token',res[0]);
        localStorage.setItem('id',res[1].id);
        localStorage.setItem('nom',res[1].nom);
        localStorage.setItem('prenom',res[1].prenom);
        localStorage.setItem('email',res[1].email);
        
         

        if(res[0])
        {
            this.router.navigate(['client-dash'])
        }

      });  
  }

}
