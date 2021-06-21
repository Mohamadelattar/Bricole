import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from 'src/service/lazy-load-script.service';
import { TranslateService } from '@ngx-translate/core';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bricole-Front';
   
  constructor(private lazyLoadService: LazyLoadScriptService , public translate: TranslateService) { 
    translate.addLangs(['fr', 'ar']);
    translate.setDefaultLang('fr');
  }
  freelancers = [];

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {

     
     
  }

   
   
}
