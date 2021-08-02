import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FreelancerService } from 'src/service/freelancer.service';

@Component({
  selector: 'app-top-freelancer',
  templateUrl: './top-freelancer.component.html',
  styleUrls: ['./top-freelancer.component.css']
})
export class TopFreelancerComponent implements OnInit {
  freelancers:any;
  constructor(private freelanceService:FreelancerService,public translate: TranslateService) { 
    translate.addLangs(['fr', 'ar']);
    translate.setDefaultLang('fr');
  }

  ngOnInit(): void {
    this.freelanceService.getFreelancers().subscribe(res=>{
      this.freelancers = res;
      console.log(this.freelancers);
    })
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
