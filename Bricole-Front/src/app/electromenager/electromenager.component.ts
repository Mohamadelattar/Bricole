import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/service/categorie.service';

@Component({
  selector: 'app-electromenager',
  templateUrl: './electromenager.component.html',
  styleUrls: ['./electromenager.component.css']
})
export class ElectromenagerComponent implements OnInit {

  projets:any;
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getProjet(6).subscribe(res=>{
      console.log(res);
      this.projets = res;
    })
  }

}
