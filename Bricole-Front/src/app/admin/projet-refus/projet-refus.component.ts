import { ProjetService } from 'src/service/projet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet-refus',
  templateUrl: './projet-refus.component.html',
  styleUrls: ['./projet-refus.component.css']
})
export class ProjetRefusComponent implements OnInit {

  validate=false;
  projets:any;

  constructor(private projetService:ProjetService) { }

  ngOnInit(): void {
    this.projetService.getProjetsRefus().subscribe(res =>{
      console.log(res);
      this.projets = res;
    })
  }

  approuver(id:number){
    this.projetService.approuverProjet(id).subscribe(res=>{
      console.log("3la slama");
      this.projets = res;
      this.validate=true;

    })
  }
}
