import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-how-work',
  templateUrl: './how-work.component.html',
  styleUrls: ['./how-work.component.css']
})
export class HowWorkComponent implements OnInit {
  /* textDir: string = 'ltr';*/

  constructor(public translate: TranslateService) { 
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
     
      
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
