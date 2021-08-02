import { ClientService } from './../../../service/client.service';
import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/service/projet.service';
import { Chart,registerables } from 'chart.js';
import { FreelancerService } from 'src/service/freelancer.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nom:string;
  prenom:string;
  projets:any;
  projetsConfirmes:any;
  numProjetConfirme:number;
  id:number;
  numProjet:number;
  projetTerminer:any;
  numProjetTerminer:number;
  freelancers:any;


  constructor(private clientService:ClientService, private projetService:ProjetService , private freelanceService:FreelancerService) { }

  ngOnInit(): void {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    this.id = Number(localStorage.getItem("id"));
    
    this.projetService.getProjetsClient(this.id).subscribe(res=>{
      this.projets = res;
      this.numProjet = Object.keys(this.projets).length;
    });

    this.projetService.getProjetsClientConfirmes(this.id).subscribe(res=>{
      this.projetsConfirmes = res;
      this.numProjetConfirme = Object.keys(this.projetsConfirmes).length;
       
    })

    this.projetService.geProjetsClientTerminer(this.id).subscribe(res=>{
      this.projetTerminer = res;
      this.numProjetTerminer = Object.keys(this.projetTerminer).length;
      
      this.chart();
      
    })

    this.freelanceService.getFreelancers().subscribe(res=>{
      this.freelancers = res;
      console.log(this.freelancers);
    })
    
  }

  chart()
  {
    var myChart = new Chart('chart', {
      type: 'bar',
      data: {
          labels: ['Projets', 'Projets confirmés', 'Projet Terminés'],
          datasets: [{
              label:'',
              data: [this.numProjet, this.numProjetConfirme, this.numProjetTerminer],
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
