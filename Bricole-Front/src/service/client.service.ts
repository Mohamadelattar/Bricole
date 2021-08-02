import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const loginUrl="http://127.0.0.1:8000/api/login";
const clientUrl = "http://127.0.0.1:8000/api/client";
const clientsUrl = "http://127.0.0.1:8000/api/clients";
const clientsaveUrl = "http://127.0.0.1:8000/api/editClient";
const registerUrl="http://127.0.0.1:8000/api/registerClient";
@Injectable({
  providedIn: 'root'
})
export class ClientService {
   
 
  
  constructor(private http:HttpClient) { }
   
    login(data): Observable<any> {
      return this.http.post(loginUrl, data);
    }

    Register(data): Observable<any> {
      return this.http.post(registerUrl, data);
    }

    getClient(id:number){
      return this.http.get(clientUrl+"/"+id)
    }

    save(data): Observable<any> {
      return this.http.post(clientsaveUrl, data);
    }

    getClients(){
      return this.http.get(clientsUrl);
    }

}
