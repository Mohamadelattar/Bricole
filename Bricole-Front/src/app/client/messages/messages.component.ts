import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FreelancerService } from 'src/service/freelancer.service';
import { MessageService } from 'src/service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  idClient:number;
  idFreelancer:number;
  conversation : any;
  freelancer:any;
  messageForm:FormGroup;
  constructor(private route:ActivatedRoute , private message:MessageService , private freelance:FreelancerService) { }

  ngOnInit(): void {
    
    this.idClient = Number(localStorage.getItem('id'));
    this.route.paramMap.subscribe(params=>{
      this.idFreelancer = Number(params.get("idFreelancer"));

    
    });
    console.log("Client :" + this.idClient);
    console.log("Freelancer :" + this.idFreelancer);

    this.message.conversation(this.idClient,this.idFreelancer).subscribe(res =>{
      this.conversation = res;
      console.log(this.conversation);
    });

    this.freelance.getFreelancer(this.idFreelancer).subscribe(res =>{
      this.freelancer = res;
      console.log(this.freelancer.nom);
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
    return (id % 2 == 0);
  }
  messager() {
    this.message.saveMessage(this.messageForm.value).subscribe(res=>{
      console.log(res);
    })
     
  }
}
