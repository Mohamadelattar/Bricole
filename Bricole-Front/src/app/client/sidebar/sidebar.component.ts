import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
textDir: string = 'ltr';
  constructor(private route:Router , public translate: TranslateService) { 
    translate.addLangs(['fr', 'ar']);
    translate.setDefaultLang('fr');
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
  {
    if(event.lang == 'ar')
    {
      this.textDir = 'rtl';
    } 
    else
    {
      this.textDir = 'ltr';
    }
  });
  }

  ngOnInit(): void {
     
  }

  ajouter() {
    this.route.navigate(['/index'])
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
