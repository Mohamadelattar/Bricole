import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const loginUrl="http://127.0.0.1:8000/api/loginAdmin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(loginUrl, data);
  }
}
