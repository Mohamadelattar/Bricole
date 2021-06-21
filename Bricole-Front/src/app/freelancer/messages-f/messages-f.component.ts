import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/service/client.service';
import { MessageService } from 'src/service/message.service';

@Component({
  selector: 'app-messages-f',
  templateUrl: './messages-f.component.html',
  styleUrls: ['./messages-f.component.css']
})
export class MessagesFComponent implements OnInit {

  idClient:number;
  idFreelancer:number;
  conversation : any;
  client:any;
  messageForm:FormGroup;
  constructor(private route:ActivatedRoute , private message:MessageService , private clientService:ClientService) { }

  ngOnInit(): void {
    
    this.idFreelancer = Number(localStorage.getItem('id'));
    this.route.paramMap.subscribe(params=>{
      this.idClient = Number(params.get("idClient"));

    
    });
    console.log("Client :" + this.idClient);
    console.log("Freelancer :" + this.idFreelancer);

    this.message.conversation(this.idClient,this.idFreelancer).subscribe(res =>{
      this.conversation = res;
      console.log(this.conversation);
    });

    this.clientService.getClient(this.idClient).subscribe(res =>{
      this.client = res;
      console.log(this.client.nom);
    });

    this.messageForm = new FormGroup({
      'message':new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'freelancer_id':new FormControl(this.idFreelancer),
      'client_id':new FormControl(this.idClient),
    }
    );
    
  }
  verifier(id:number)
  {
    console.log(id % 2 == 0);
    return (id % 2 == 1);
  }
  messager() {
    this.message.saveMessage(this.messageForm.value).subscribe(res=>{
      console.log(res);
    })
     
  }
}
