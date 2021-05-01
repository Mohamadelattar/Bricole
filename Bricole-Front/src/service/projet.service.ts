import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const projetUrl="http://127.0.0.1:8000/api/projet";
const projetsClient="http://127.0.0.1:8000/api/projects/client/";
@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http:HttpClient) { }

  save(data): Observable<any> {
    return this.http.post(projetUrl, data);
  }

  getProjetsClient(id:number){
    return this.http.get(projetsClient+id);
  }
}
