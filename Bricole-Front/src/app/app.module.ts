import { FooterComponent } from './home/footer/footer.component';
import { CategoryComponent } from './home/category/category.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { ClientComponent } from './client/client.component';
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
import { PortfolioFreelancerComponent } from './freelancer/portfolio-freelancer/portfolio-freelancer.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { MessageAdminComponent } from './admin/message-admin/message-admin.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { ProjetsComponent } from './admin/projets/projets.component';
import { ProjetsConfirmeComponent } from './admin/projets-confirme/projets-confirme.component';
import { ProjetRefusComponent } from './admin/projet-refus/projet-refus.component';

const appRoutes: Routes = [
   
  { path: 'client-dash', component: DashboardComponent , canActivate:[AuthService]},
  { path: 'client-message', component: MessageClientComponent , canActivate:[AuthService]},
  { path: 'client-projet', component: ProjetComponent , canActivate:[AuthService] },
  { path: 'projet-post', component: PostProjetComponent , canActivate:[AuthService]},
  { path: 'profil-edit', component: ProfilEditComponent , canActivate:[AuthService]},
  { path: 'projet-post-two', component: PostProjetTwoComponent , canActivate:[AuthService]},
  { path: 'freelancer-dash', component: DashbordFreelancerComponent},
  { path: 'freelancer-message', component: MessageFreelancerComponent},
  { path: 'portfolio-freelancer', component: PortfolioFreelancerComponent},
  { path: 'porfil-freelancer', component: ProfilFreelancerComponent},
  { path: 'projets', component: ProjetsComponent},
  { path: 'projets-confirme', component: ProjetsConfirmeComponent},
  { path: 'projets-refus', component: ProjetRefusComponent},
  { path: 'index', component: HomeComponent},
  { path: 'projet/:idProjet', component: PageProjetComponent},
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'client', component: ClientComponent},
  
  

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
    ClientComponent,
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
    PortfolioFreelancerComponent,
    DashboardAdminComponent,
    MessageAdminComponent,
    SidebarAdminComponent,
    ProjetsComponent,
    ProjetsConfirmeComponent,
    ProjetRefusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }