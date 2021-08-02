import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { PortfolioService } from 'src/service/portfolio.service';
import { ProjetService } from 'src/service/projet.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashbord-freelancer',
  templateUrl: './dashbord-freelancer.component.html',
  styleUrls: ['./dashbord-freelancer.component.css']
})
export class DashbordFreelancerComponent implements OnInit {

  nom:string;
  prenom:string;
  id:number;
  portfolios:any;
  projets:any;
  constructor(private portfolioService:PortfolioService , private projetService:ProjetService) { }

  ngOnInit(): void {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    this.id = Number(localStorage.getItem("id"));
    this.portfolioService.getPortfoios(this.id).subscribe(res=>{
      this.portfolios = res;
    })

    this.projetService.getProjects().subscribe(res=>{
      this.projets = res;
    })
    
    this.chart();
  }

  chart()
  {
    var myChart = new Chart('chart', {
      type: 'bar',
      data: {
          labels: ['Projets', 'Terminer', 'Encore'],
          datasets: [{
              label:'',
              data: [7, 3, 4],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)', 
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)', 
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
