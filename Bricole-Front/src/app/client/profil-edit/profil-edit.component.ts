import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/service/client.service';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.css']
})
export class ProfilEditComponent implements OnInit {
  editForm:FormGroup;
  pseudo=localStorage.getItem("pseudo");
  nom=localStorage.getItem("nom");
  prenom=localStorage.getItem("prenom");
  email=localStorage.getItem("email");
  telephone=localStorage.getItem("telephone");
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
     
    this.editForm = new FormGroup({
      'pseudo' : new FormControl(this.pseudo, [Validators.required, Validators.minLength(4)]),
      'nom' : new FormControl(this.nom, [Validators.required, Validators.minLength(4)]),
      'prenom' : new FormControl(this.prenom, [Validators.required, Validators.minLength(4)]),
      'email' : new FormControl(this.email, [Validators.required, Validators.minLength(10)]),
      'telephone' : new FormControl(this.telephone, [Validators.required, Validators.minLength(10)]),
            
    });
  }

}
