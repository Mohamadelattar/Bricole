import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const portfolioUrl="http://127.0.0.1:8000/api/portfolio";
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  save(data): Observable<any> {
    return this.http.post(portfolioUrl, data);
  }
  
}
