import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProjetService } from 'src/service/projet.service';

@Component({
  selector: 'app-projet-commentaire',
  templateUrl: './projet-commentaire.component.html',
  styleUrls: ['./projet-commentaire.component.css']
})
export class ProjetCommentaireComponent implements OnInit {
  idProjectCommentaire : number;
  commentaires:any;
  freelnacers:any;
  nombre:number;
  /* textDir: string = 'ltr';*/
  constructor(private route:ActivatedRoute , private projetService:ProjetService , public translate: TranslateService) {
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
    this.route.paramMap.subscribe(params =>{
      this.idProjectCommentaire =  Number(params.get('idProjectCommentaire'));
      console.log("Id Project" + this.idProjectCommentaire);
    })

    this.projetService.getCommentaires(this.idProjectCommentaire).subscribe(res =>{
      this.commentaires = res[0];
      this.freelnacers = res[1];
      console.log( this.freelnacers[0].nom);
      this.nombre = this.commentaires.length;
    })
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
