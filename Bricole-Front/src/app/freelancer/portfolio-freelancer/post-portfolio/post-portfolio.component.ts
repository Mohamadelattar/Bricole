import { Router } from '@angular/router';
import { PortfolioService } from './../../../../service/portfolio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-portfolio',
  templateUrl: './post-portfolio.component.html',
  styleUrls: ['./post-portfolio.component.css']
})
export class PostPortfolioComponent implements OnInit {
  portfolioForm:FormGroup;
  validate : boolean;
  constructor(private portfolioService:PortfolioService,
              private router:Router) { }

  ngOnInit(): void {

    this.portfolioForm = new FormGroup({
      'titre' : new FormControl(null,[Validators.required , Validators.minLength(10)]),
      'description' : new FormControl(null,[Validators.required , Validators.minLength(100)]),
      'freelancer_id': new FormControl(Number(localStorage.getItem("id"))),
    });
  }

  portfolio(){
    console.log(this.portfolioForm.value);
    this.portfolioService.save(this.portfolioForm.value).subscribe(res =>{
      console.log(res);
      this.validate = true;
      this.router.navigate(['/portfolio-post-two']);
    })
  }

}
