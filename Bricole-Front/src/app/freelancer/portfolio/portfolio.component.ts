import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios:any;
  id:number;
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.id= Number(localStorage.getItem('id'));
    this.portfolioService.getPortfoios(this.id).subscribe(res=>{
      this.portfolios = res;
    })
  }

}
