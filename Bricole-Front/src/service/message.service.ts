import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const messageUsersUrl="http://127.0.0.1:8000/api/messagesUsers";
const messageFirst ="http://127.0.0.1:8000/api/messagesFirst";
const allmessage ="http://127.0.0.1:8000/api/conversation/";
const messageUrl="http://127.0.0.1:8000/api/saveMessage";
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

messagesUsers(data): Observable<any> {
    return this.http.post(messageUsersUrl, data);
  }
  messagesFirst(data): Observable<any> {
    return this.http.post(messageFirst, data);
  }

  conversation(idClient:number , idFreelance:number) {
    return this.http.get(allmessage+idClient+"/"+idFreelance);
  }
  saveMessage(data): Observable<any> {
    return this.http.post(messageUrl, data);
  }
  
}
