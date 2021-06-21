import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from 'src/service/client.service';
import { MessageService } from 'src/service/message.service';

@Component({
  selector: 'app-message-freelancer',
  templateUrl: './message-freelancer.component.html',
  styleUrls: ['./message-freelancer.component.css']
})
export class MessageFreelancerComponent implements OnInit {

  messages:any;
  messageUsers:any;
  users:any;
  num:number;
  freelancer:any;
  message = new FormGroup({
    'accaountType' : new FormControl(localStorage.getItem("accaountType")),
      'id' : new FormControl(Number(localStorage.getItem("id")))
    });

  constructor(private messageService:MessageService,
              private clientService:ClientService) {
                
            }

  ngOnInit(): void {
      this.messageUsers = [];
      this.messages = [];
      this.messageService.messagesUsers(this.message.value).subscribe(res =>{
      this.messages = res;
      this.messageUsers = res;
      console.log(this.messages);
    })
  this.users = [];
     
     
    setTimeout(() => {this.trier();}, 3000);
    setTimeout(() => {this.getUsers();}, 5000);

  }
   
trier()
{
     for (let i = 0; i < this.messageUsers.length; i++) {
     
         
        for (let index = i+1; index < this.messageUsers.length; index++) {  
        if(Number(this.messageUsers[i].client_id) === Number(this.messageUsers[index].client_id))
          { 
            delete this.messageUsers[index];
          } 
        }
        
}
}
getUsers()
{
  
  for (let i = 0; i < this.messageUsers.length; i++) {
    this.num = Number(this.messageUsers[i].client_id);
    this.clientService.getClient(Number(this.messageUsers[i].client_id)).subscribe(res =>{
    this.freelancer = res;
    this.users.push(res);
     
  })
}


}

}
