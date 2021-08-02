import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentaireService } from 'src/service/commentaire.service';
import { FreelancerService } from 'src/service/freelancer.service';
import { ProjetService } from 'src/service/projet.service';
declare var paypal;
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  applicationForm:FormGroup;
  idCommentaire:number;
  idFreelancer:number;
  idProjet:number;
  commentaire:any;
  freelancer:any;
  projet:any;
  price:number;

  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg'
  };

  paidFor = false;

  constructor(private route:ActivatedRoute,
              private commentaireService:CommentaireService,
              private freelanceService:FreelancerService,
              private projetService:ProjetService) { }

    ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      this.idCommentaire = Number(params.get("idCommentaire"));
    });
    this.getCommentaire();
     

    

      
  }
  
  getCommentaire(){
    this.commentaireService.getCommentaire(this.idCommentaire).subscribe(res=>{
      
      console.log("ich bin da");
      this.commentaire = res;
      console.log(this.commentaire);
      this.idFreelancer = Number(this.commentaire.freelancer_id);
      this.idProjet = Number(this.commentaire.projet_id);
      console.log(this.idFreelancer);
      this.getFreelancer();
      this.getProjet();
    });
  }
getFreelancer(){
  this.freelanceService.getFreelancer(this.idFreelancer).subscribe(res=>{
    this.freelancer = res;
    console.log(this.freelancer);
  });
}
getProjet()
{
  this.projetService.getProjet(this.idProjet).subscribe(res=>{
    this.projet = res;
    console.log(this.projet);
    this.paypal();
  })
}

paypal(){
  paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.projet.titre,
                amount: {
                  currency_code: 'USD',
                  value: Number(this.projet.budget)
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
}

application(){
  this.applicationForm = new FormGroup({
    'message' : new FormControl(this.commentaire.commmentaire, [Validators.required, Validators.minLength(10)]),
    'description' : new FormControl(this.projet.description, [Validators.required, Validators.minLength(100)]),
    'dateDebut' : new FormControl('2020-01-01'),
    'statut' : new FormControl("Commencer"),
    'freelancer_id': new FormControl(this.idFreelancer),
    'projet_id': new FormControl(this.idProjet),     
  });
}

applicationSend()
  {
     this.application();
    console.log(this.applicationForm.value);
}
}
