import { FreelancerService } from './../../service/freelancer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-freelancer-page',
  templateUrl: './freelancer-page.component.html',
  styleUrls: ['./freelancer-page.component.css']
})
export class FreelancerPageComponent implements OnInit {
id:number;
freelancer:any;
  constructor(private route:ActivatedRoute , private freelancerService:FreelancerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id =  Number(params.get('idFreelancer'));
    })

    this.freelancerService.getFreelancer(this.id).subscribe(res=>{
      console.log(res);
      this.freelancer = res;
      console.log(this.freelancer.nom);
    })
  }

}
