import { CategorieService } from './../../../../service/categorie.service';
import { ProjetService } from './../../../../service/projet.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
 

@Component({
  selector: 'app-post-projet',
  templateUrl: './post-projet.component.html',
  styleUrls: ['./post-projet.component.css']
})



export class PostProjetComponent implements OnInit {
  projetForm:FormGroup;
  
  serverErrors = [];
  categories :any;
  validate:boolean;

  constructor(private projetService: ProjetService, 
              private categorieService: CategorieService          
    ) { }

  ngOnInit(): void {
    this.projetForm = new FormGroup({
      'titre' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'description' : new FormControl(null, [Validators.required, Validators.minLength(100)]),
      'budget' : new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'statut' : new FormControl("suspend"),
      'dateDebut' : new FormControl('2020-01-01'),
      'dateFin' : new FormControl('2020-01-01'),
      'client_id': new FormControl(Number(localStorage.getItem("id"))),
      'categorie_id': new FormControl('',[Validators.required]),
      
       
      
            
    });
    this.categorieService.getCategories().subscribe(res =>{
      console.log(res);
      this.categories = res;

    });
     
     
 

  }

  projet()
  {
    console.log(this.projetForm.value);
    this.projetService.save(this.projetForm.value).subscribe(response =>{
      console.log(response);
      this.validate = true;
    });

  }

}
