import { Router } from '@angular/router';
import { CategorieService } from './../../../../service/categorie.service';
import { ProjetService } from './../../../../service/projet.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
 
 

@Component({
  selector: 'app-post-projet',
  templateUrl: './post-projet.component.html',
  styleUrls: ['./post-projet.component.css']
})



export class PostProjetComponent implements OnInit {
  
  
  projetForm:FormGroup;
  files:any;
  serverErrors = [];
  categories :any;
  validate:boolean;
  resultat :any;
  filedata:any;
  /* File onchange event */
  fileEvent(e){
      this.filedata = e.target.files[0];
  }
  /* textDir: string = 'ltr';*/
  constructor(private projetService: ProjetService, 
              private categorieService: CategorieService,
              private router:Router,
              public translate: TranslateService        
    ) {
      translate.addLangs(['fr', 'ar']);
    translate.setDefaultLang('fr');
  /*  this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
  {
    if(event.lang == 'ar')
    {
      this.textDir = 'rtl';
    } 
    else
    {
      this.textDir = 'ltr';
    }
  });*/
     }

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
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])      
    });
    this.categorieService.getCategories().subscribe(res =>{
      console.log(res);
      this.categories = res;

    });
     
     
 

  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  projet()
  {
     
    console.log(this.projetForm.value);
    this.projetService.save(this.projetForm.value).subscribe(response =>{
      console.log(response);
      this.validate = true;
      this.router.navigate(['/projet-post-two']);
    });



  }



}
