import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const categorieUrl="http://127.0.0.1:8000/api/categorie";
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get(categorieUrl);
  }
}
