import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const loginUrl="http://127.0.0.1:8000/api/login";
const clientUrl = "http://127.0.0.1:8000/api/client";
const clientsaveUrl = "http://127.0.0.1:8000/api/editClient";
@Injectable({
  providedIn: 'root'
})
export class ClientService {
   
 
  
  constructor(private http:HttpClient) { }
   
    login(data): Observable<any> {
      return this.http.post(loginUrl, data);
    }

    getClient(id:number){
      return this.http.get(clientUrl+"/"+id)
    }

    save(data): Observable<any> {
      return this.http.post(clientsaveUrl, data);
    }

}
