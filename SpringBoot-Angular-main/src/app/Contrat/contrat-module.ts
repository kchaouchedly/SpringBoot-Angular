import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../Components/components.module';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { ContratRoutingModule } from './contart-routing.module';
import { ListContratComponent } from './list-contrat/list-contrat.component';


@NgModule({
  declarations: [
  
    AddContratComponent,
    ListContratComponent,
  

  ],
  imports: [
    CommonModule,
    ContratRoutingModule ,
    ComponentsModule
  ]

})
export class ContartModule { }
