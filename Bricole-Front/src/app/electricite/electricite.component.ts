import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CategorieService } from 'src/service/categorie.service';

@Component({
  selector: 'app-electricite',
  templateUrl: './electricite.component.html',
  styleUrls: ['./electricite.component.css']
})
export class ElectriciteComponent implements OnInit {
/* textDir: string = 'ltr';*/
  projets:any;
  constructor(private categorieService:CategorieService , public translate: TranslateService) {
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
    this.categorieService.getProjet(4).subscribe(res=>{
      console.log(res);
      this.projets = res;
    })
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
