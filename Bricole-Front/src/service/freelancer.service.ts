import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const loginUrl="http://127.0.0.1:8000/api/freelancer/login";
const freelancerUrl="http://127.0.0.1:8000/api/freelancer";
@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http:HttpClient) {

   }

   login(data): Observable<any> {
    return this.http.post(loginUrl, data);
  }

  getFreelancer(id:number){
    return this.http.get(freelancerUrl+"/"+id)
  } 
}
