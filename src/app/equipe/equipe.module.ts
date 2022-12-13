import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { EquipeRoutingModule } from './equipe-routing.module';
import { AddequipeComponent } from './addequipe/addequipe.component';
import { ListequipeComponent } from './listequipe/listequipe.component';
import { ComponentsModule } from '../Components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditequipeComponent } from './editequipe/editequipe.component';

import { ListeequipefrontComponent } from './listeequipefront/listeequipefront.component';




@NgModule({
  declarations: [
    AddequipeComponent,
    ListequipeComponent,
    EditequipeComponent,
    ListeequipefrontComponent
  ],
 
  imports: [
    CommonModule,
    EquipeRoutingModule,
    ComponentsModule,
    FormsModule,HttpClientModule,
  
   BrowserModule,
   ReactiveFormsModule,NgxPaginationModule,

 
  ]
})
export class EquipeModule { }
