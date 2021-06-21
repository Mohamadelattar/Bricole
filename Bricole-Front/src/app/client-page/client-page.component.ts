import { ClientService } from 'src/service/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {
  client:any;
  id:number;
  constructor(private route:ActivatedRoute , private clientService:ClientService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id = Number(params.get("idClient"));
    })

    this.clientService.getClient(this.id).subscribe(res=>{
      this.client = res;
      console.log(this.client);
    })
  }

   

}
