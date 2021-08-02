import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const loginUrl="http://127.0.0.1:8000/api/freelancer/login";
const freelancerUrl="http://127.0.0.1:8000/api/freelancer";
const freelancersUrl="http://127.0.0.1:8000/api/freelancers";
const registerUrl="http://127.0.0.1:8000/api/registerFreelancer";
@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http:HttpClient) {

   }

   login(data): Observable<any> {
    return this.http.post(loginUrl, data);
  }

  Register(data): Observable<any> {
    return this.http.post(registerUrl, data);
  }

  getFreelancer(id:number){
    return this.http.get(freelancerUrl+"/"+id)
  } 

  getFreelancers(){
    return this.http.get(freelancersUrl)
  }
}
