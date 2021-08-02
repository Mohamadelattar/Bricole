import { ProjetService } from './../../../service/projet.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  /* textDir: string = 'ltr';*/
  projets:any;
  constructor(private projetService:ProjetService , public translate: TranslateService) { 
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
    this.projetService.getProjetsClient(Number(localStorage.getItem("id"))).subscribe(res =>{
      console.log(res);
      this.projets = res;

    });
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
