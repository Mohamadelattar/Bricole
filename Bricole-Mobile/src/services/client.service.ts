import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const loginUrl="http://127.0.0.1:8000/api/login";
//const client = "http://127.0.0.1:8000/api/user";
@Injectable({
  providedIn: 'root'
})
export class ClientService {
   
 
  
  constructor(private http:HttpClient) { }
   
    login(data): Observable<any> {
      return this.http.post(loginUrl, data);
    }


}
