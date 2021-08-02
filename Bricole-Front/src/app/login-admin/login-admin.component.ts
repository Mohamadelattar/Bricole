import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/service/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginForm = new FormGroup({
    'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  serverErrors = [];
  constructor(
    private adminService:AdminService,
    private router:Router,
  ) { }
    
  ngOnInit(): void {
  }

  login()
  {     
       
        this.adminService.login(this.loginForm.value).subscribe(res => {
          console.log(res);
          localStorage.setItem('token',res[0]);
          localStorage.setItem('id',res[1].id);
          localStorage.setItem('nom',res[1].nom);
          localStorage.setItem('prenom',res[1].prenom);
          localStorage.setItem('email',res[1].email);
          localStorage.setItem('pseudo',res[1].pseudo);
          localStorage.setItem('telephone',res[1].telephone);
          localStorage.setItem('accaountType',"Admin");
          if(res[0])
          {
              this.router.navigate(['admin']);
          }
        });


      
  }
 
}
