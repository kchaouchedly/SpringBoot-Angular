import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AddContratComponent } from './Contrat/add-contrat/add-contrat.component';
import { ContratRoutingModule } from './Contrat/contart-routing.module';
import { ContartModule } from './Contrat/contrat-module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListContratComponent } from './Contrat/list-contrat/list-contrat.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ComponentsModule } from './Components/components.module';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EquipeService } from './equipe.service';
import { HttpClientModule } from '@angular/common/http';
import { EquipeModule } from './equipe/equipe.module';
import { DetailequipeService } from './detailequipe.service';
import { DetailEquipeModule } from './detail-equipe/detail-equipe.module';



@NgModule({
  declarations: [
    AppComponent,
   
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
     ContartModule, 
     ReactiveFormsModule,
     ComponentsModule,
  EquipeModule,
  DetailEquipeModule
  
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
