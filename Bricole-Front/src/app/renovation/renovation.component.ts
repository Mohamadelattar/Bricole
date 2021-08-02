import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/service/categorie.service';

@Component({
  selector: 'app-renovation',
  templateUrl: './renovation.component.html',
  styleUrls: ['./renovation.component.css']
})
export class RenovationComponent implements OnInit {

  projets:any;
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getProjet(6).subscribe(res=>{
      console.log(res);
      this.projets = res;
    })
  }
}
