import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/service/projet.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projets:any;
  validate=false;
  refu= false;
  constructor(private projetService:ProjetService) { }

  ngOnInit(): void {
    this.projetService.getProjets().subscribe(res =>{
      console.log(res);
      this.projets = res;
    })
  }

  approuver(id:number){
    this.projetService.approuverProjet(id).subscribe(res=>{
      console.log("3la slama");
      this.validate=true;
      this.refu = false;

    })
  }

  refus(id:number){
    this.projetService.refusProjet(id).subscribe(res=>{
      console.log("3la slama");
      this.validate=false;
      this.refu = true;
    })
  }

}
