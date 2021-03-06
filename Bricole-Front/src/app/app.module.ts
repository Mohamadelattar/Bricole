import { FooterComponent } from './home/footer/footer.component';
import { CategoryComponent } from './home/category/category.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HowWorkComponent } from './home/how-work/how-work.component';
import { SliderComponent } from './home/slider/slider.component';
import { StatisticComponent } from './home/statistic/statistic.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { TopFreelancerComponent } from './home/top-freelancer/top-freelancer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './client/sidebar/sidebar.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MessageClientComponent } from './client/message-client/message-client.component';
import { ProjetComponent } from './client/projet/projet.component';
import { PostProjetComponent } from './client/projet/post-projet/post-projet.component';
import { ProfilEditComponent } from './client/profil-edit/profil-edit.component';
import { AuthService } from './guards/auth.service';
import { LoginComponent } from './login/login.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageProjetComponent } from './page-projet/page-projet.component';
 

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PostProjetTwoComponent } from './client/projet/post-projet-two/post-projet-two.component';
import { DashbordFreelancerComponent } from './freelancer/dashbord-freelancer/dashbord-freelancer.component';
import { MessageFreelancerComponent } from './freelancer/message-freelancer/message-freelancer.component';
import { SidebarFreelancerComponent } from './freelancer/sidebar-freelancer/sidebar-freelancer.component';
import { ProfilFreelancerComponent } from './freelancer/profil-freelancer/profil-freelancer.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { MessageAdminComponent } from './admin/message-admin/message-admin.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { ProjetsComponent } from './admin/projets/projets.component';
import { ProjetsConfirmeComponent } from './admin/projets-confirme/projets-confirme.component';
import { ProjetRefusComponent } from './admin/projet-refus/projet-refus.component';
import { PostPortfolioComponent } from './freelancer/portfolio-freelancer/post-portfolio/post-portfolio.component';
import { PostPortfolioTwoComponent } from './freelancer/portfolio-freelancer/post-portfolio-two/post-portfolio-two.component';
import { FreelancerPageComponent } from './freelancer-page/freelancer-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { MessagesComponent } from './client/messages/messages.component';
import { MessagesFComponent } from './freelancer/messages-f/messages-f.component';
import { PlomberieComponent } from './plomberie/plomberie.component';
import { PeintureComponent } from './peinture/peinture.component';
import { ChauffageComponent } from './chauffage/chauffage.component';
import { ElectriciteComponent } from './electricite/electricite.component';
import { MenuiserieComponent } from './menuiserie/menuiserie.component';
import { RenovationComponent } from './renovation/renovation.component';
import { ElectromenagerComponent } from './electromenager/electromenager.component';
import { MontageComponent } from './montage/montage.component';
import { RegisterComponent } from './register/register.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ProjetCommentaireComponent } from './client/projet/projet-commentaire/projet-commentaire.component';
import { SoldeComponent } from './client/solde/solde.component';
import { BalanceComponent } from './client/balance/balance.component';
import { ApplicationComponent } from './client/projet/application/application.component';
import { PortfolioComponent } from './freelancer/portfolio/portfolio.component';

const appRoutes: Routes = [
   
  { path: 'client-dash', component: DashboardComponent , canActivate:[AuthService]},
  { path: 'client/:idClient', component: ClientPageComponent},
  { path: 'client-message', component: MessageClientComponent , canActivate:[AuthService]},
  { path: 'conversation-client/:idFreelancer', component: MessagesComponent , canActivate:[AuthService]},
  { path: 'client-projet', component: ProjetComponent , canActivate:[AuthService] },
  { path: 'projet-post', component: PostProjetComponent , canActivate:[AuthService]},
  { path: 'profil-edit', component: ProfilEditComponent , canActivate:[AuthService]},
  { path: 'projet-post-two', component: PostProjetTwoComponent , canActivate:[AuthService]},
  { path: 'projet-commentaire/:idProjectCommentaire', component:ProjetCommentaireComponent,canActivate:[AuthService]},

  { path: 'freelancer-dash', component: DashbordFreelancerComponent},
  { path: 'freelancer/:idFreelancer', component: FreelancerPageComponent},
  { path: 'freelancer-message', component: MessageFreelancerComponent},
  { path: 'conversation-freelancer/:idClient', component: MessagesFComponent},
  { path: 'portfolio-post', component: PostPortfolioComponent},
  { path: 'portfolio-post-two', component: PostPortfolioTwoComponent },
  { path: 'porfil-freelancer', component: ProfilFreelancerComponent},
  { path: 'portfolio-freelancer', component: PortfolioComponent },
  { path:'admin', component:DashboardAdminComponent},
  { path:'message-admin', component:MessageAdminComponent},
  { path: 'projets', component: ProjetsComponent},
  { path: 'projets-confirme', component: ProjetsConfirmeComponent},
  { path: 'projets-refus', component: ProjetRefusComponent},
  { path: 'plomberie' ,  component:PlomberieComponent},
  { path: 'peinture' , component:PeintureComponent},
  { path: 'chauffage', component:ChauffageComponent},
  { path: 'electricite', component:ElectriciteComponent},
  { path: 'menuiserie', component:MenuiserieComponent}, 
  { path: 'renovation', component:RenovationComponent},
  { path: 'electromenager', component:ElectromenagerComponent},
  { path: 'montage', component:MontageComponent},
  { path: 'index', component: HomeComponent},
  { path: 'portfolios', component: PortfolioComponent},
  { path: 'projet/:idProjet', component: PageProjetComponent},
  { path: 'application/:idCommentaire', component: ApplicationComponent},
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login-admin', component: LoginAdminComponent},
  { path: 'solde', component: SoldeComponent},
  { path: 'register', component: RegisterComponent},
  
  

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    FooterComponent,
    HowWorkComponent,
    SliderComponent,
    StatisticComponent,
    TestimonialComponent,
    TopFreelancerComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    MessageClientComponent,
    ProjetComponent,
    PostProjetComponent,
    ProfilEditComponent,
    LoginComponent,
    HeaderLoginComponent,
    PageProjetComponent,
    PostProjetTwoComponent,
    DashbordFreelancerComponent,
    MessageFreelancerComponent,
    SidebarFreelancerComponent,
    ProfilFreelancerComponent,
    DashboardAdminComponent,
    MessageAdminComponent,
    SidebarAdminComponent,
    ProjetsComponent,
    ProjetsConfirmeComponent,
    ProjetRefusComponent,
    PostPortfolioComponent,
    PostPortfolioTwoComponent,
    FreelancerPageComponent,
    ClientPageComponent,
    MessagesComponent,
    MessagesFComponent,
    PlomberieComponent,
    PeintureComponent,
    ChauffageComponent,
    ElectriciteComponent,
    MenuiserieComponent,
    RenovationComponent,
    ElectromenagerComponent,
    MontageComponent,
    RegisterComponent,
    LoginAdminComponent,
    ProjetCommentaireComponent,
    SoldeComponent,
    BalanceComponent,
    ApplicationComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}