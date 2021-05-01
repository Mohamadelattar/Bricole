import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from 'src/service/lazy-load-script.service';
 
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bricole-Front';
   
  constructor(private lazyLoadService: LazyLoadScriptService) { }
  freelancers = [];

  
  ngOnInit() {

     
     
  }

   
   
}
