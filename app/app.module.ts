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
import { HttpClientModule } from '@angular/common/http';
import { DeletContratComponent } from './Contrat/delet-contrat/delet-contrat.component';
import { UpdateContratComponent } from './Contrat/update-contrat/update-contrat.component';               
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
   
    DashboardComponent,
    DeletContratComponent,
       
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
     ContartModule, 
     ReactiveFormsModule,
     ComponentsModule,
     HttpClientModule,
     HighchartsChartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
