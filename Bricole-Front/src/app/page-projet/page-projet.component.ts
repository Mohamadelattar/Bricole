import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjetService } from './../../service/projet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-projet',
  templateUrl: './page-projet.component.html',
  styleUrls: ['./page-projet.component.css']
})
export class PageProjetComponent implements OnInit {

  constructor(private route:ActivatedRoute , private projetService:ProjetService) { }
  id:number;
  auth=false;
  projet:any;
  images:any;
  commentaires:any;
  freelnacers:any;
  postulerForm:FormGroup;
  freelancer_id:number;
  afficherPostuler = true;
  afficherMessage = true;
  accaountType:string;

  ngOnInit(): void {
    this.connected();
    this.postulerForm = new FormGroup({
      'commentaire' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'freelancer_id': new FormControl(Number(localStorage.getItem('id'))),
      'projet_id': new FormControl(null,)
    })
    this.route.paramMap.subscribe(params =>{
      this.id =  Number(params.get('idProjet'));
    })

    this.projetService.getProjet(this.id).subscribe(res =>{
      this.projet = res;
       
    })

    this.projetService.getCommentaires(this.id).subscribe(res =>{
      
      this.commentaires = res[0];
      console.log(this.commentaires);
     this.freelnacers = res[1];
     this.testerPostuler();
     console.log( this.freelnacers[0].nom);
    })

    this.projetService.getProjetGallery(this.id).subscribe(res =>{
      this.images = res;
    })

    this.accaountType = localStorage.getItem("accaountType");
  }

  postuler()
  {
    this.postulerForm.patchValue({'projet_id':this.id});
    console.log(this.postulerForm.value);
    this.projetService.saveCommentaire(this.postulerForm.value).subscribe(res =>{
       
    })
  }
  connected()
  {
    if(localStorage.getItem("id")){
      this.auth = true;
    }

    
  }
  
  testerPostuler()
  {
    this.freelancer_id = Number(localStorage.getItem('id'));
    for (let index = 0; index < this.freelnacers.length; index++) {
      if(this.freelnacers[index].id === this.freelancer_id )
      {
        this.afficherPostuler = false;
      }
      
    }
    if(this.accaountType != "Freelancer")
    {
      this.afficherPostuler = false;
      this.afficherMessage = false;
    }
  }
}
