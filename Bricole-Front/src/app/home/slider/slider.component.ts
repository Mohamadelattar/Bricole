import { CategorieService } from './../../../service/categorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  searchText;
  searchBesoin;
  selectedVille:any;
  categories:any;
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(res =>{
      console.log(res);
      this.categories = res;

    });
  }

  heroes = [
    {  ville: 'Agadir' },
    {  ville: 'Marrakech' },
    {  ville: 'Casablanca' },
    {  ville: 'Rabat' },
    {  ville: 'Tanger' },
    {  ville: 'Fes' },
    {  ville: 'Ouajda' },
    {  ville: 'Inzegan' },
 
  ];

  RowSelected(u:any){
    this.searchText=u;   // declare variable in component.
    }

    RowSelected2(u:any){
      this.searchBesoin=u;   // declare variable in component.
      }
    
}
