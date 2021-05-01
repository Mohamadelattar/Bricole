import { ProjetService } from './../../../service/projet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projets:any;
  constructor(private projetService:ProjetService) { }

  ngOnInit(): void {
    this.projetService.getProjetsClient(Number(localStorage.getItem("id"))).subscribe(res =>{
      console.log(res);
      this.projets = res;

    });
  }

}
