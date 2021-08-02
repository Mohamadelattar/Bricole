import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const commentaireUrl = "http://127.0.0.1:8000/api/commentaire"
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
   

  constructor(private http:HttpClient) { }

  getCommentaire(id:number){
    return this.http.get(commentaireUrl+"/"+id)
  }
}
