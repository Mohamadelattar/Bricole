import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const projetUrl="http://127.0.0.1:8000/api/projet";
const projetsUrl="http://127.0.0.1:8000/api/projets";
const projectsUrl="http://127.0.0.1:8000/api/projects";
const projetsConfirmeUrl="http://127.0.0.1:8000/api/projetsConfirme";
const projetsListRefusUrl="http://127.0.0.1:8000/api/projetsRefus";
const galleryUrl="http://127.0.0.1:8000/api/gallery";
const commentaireUrl="http://127.0.0.1:8000/api/commentaire";
const commentairesUrl="http://127.0.0.1:8000/api/commentaires";
const projetEditUrl="http://127.0.0.1:8000/api/projet-edit";
const projetRefusUrl="http://127.0.0.1:8000/api/projet-refus";
const projetsClient="http://127.0.0.1:8000/api/projects/client/";
const projetsClientConfirme="http://127.0.0.1:8000/api/projet-clientConfirmes/";
const projetsClientTerminer="http://127.0.0.1:8000/api/projet-clientTerminer/";
@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http:HttpClient) { }

  save(data): Observable<any> {
    return this.http.post(projetUrl, data);
  }

  saveGallerie(data): Observable<any> {
    return this.http.post(galleryUrl, data);
  }

  saveCommentaire(data): Observable<any> {
    return this.http.post(commentaireUrl, data);
  }

  getProjetsClient(id:number){
    return this.http.get(projetsClient+id);
  }

  getProjetsClientConfirmes(id:number){
    return this.http.get(projetsClientConfirme+id);
  }

  geProjetsClientTerminer(id:number){
    return this.http.get(projetsClientTerminer+id);
  }

  getProjet(id:number){
    return this.http.get(projetUrl+"/"+id);
  }

  getProjets(){
    return this.http.get(projetsUrl);
  }

  getProjects(){
    return this.http.get(projectsUrl);
  }

  getProjetsConfirmee(){
    return this.http.get(projetsConfirmeUrl);
  }

  getProjetsRefus(){
    return this.http.get(projetsListRefusUrl);
  }
  getProjetGallery(id:number){
    return this.http.get(projetUrl+"/"+id);
  }

  approuverProjet(id:number){
    return this.http.get(projetEditUrl+"/"+id);
  }

  refusProjet(id:number){
    return this.http.get(projetRefusUrl+"/"+id);
  }

  getCommentaires(id:number){
    return this.http.get(commentairesUrl+"/"+id);
  }
}
