import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { ClientService } from 'src/service/client.service';
import { FreelancerService } from 'src/service/freelancer.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  nom:string;
  prenom:string;
  freelancers:any;
  clients:any;
  constructor(private freelanceService:FreelancerService , private clientService:ClientService) { }

  ngOnInit(): void {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    this.freelanceService.getFreelancers().subscribe(res=>{
      this.freelancers = res;
      console.log(this.freelancers);
    })

    this.clientService.getClients().subscribe(res=>{
      this.clients = res;
    })
    this.chart();
  }

  chart()
  {
    var myChart = new Chart('chart', {
      type: 'bar',
      data: {
          labels: ['Projets', 'Clients', 'Freelancers'],
          datasets: [{
              label:'',
              data: [10, 13, 11],
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
