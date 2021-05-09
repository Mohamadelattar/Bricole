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
  projet:any;
  images:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id =  Number(params.get('idProjet'));
    })

    this.projetService.getProjet(this.id).subscribe(res =>{
      this.projet = res;
    })

    this.projetService.getProjetGallery(this.id).subscribe(res =>{
      this.images = res;
    })
  }

}
