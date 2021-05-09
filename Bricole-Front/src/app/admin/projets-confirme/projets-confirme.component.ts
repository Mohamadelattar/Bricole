import { ProjetService } from 'src/service/projet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets-confirme',
  templateUrl: './projets-confirme.component.html',
  styleUrls: ['./projets-confirme.component.css']
})
export class ProjetsConfirmeComponent implements OnInit {
  projets:any;
  constructor(private projetService:ProjetService) { }

  ngOnInit(): void {
    this.projetService.getProjetsConfirmee().subscribe(res =>{
      console.log(res);
      this.projets = res;
    })
  }

}
