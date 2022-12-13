import { AddEtudiantComponent } from "./add-etudiant/add-etudiant.component";
import { ListEtudiantComponent } from "./list-etudiant/list-etudiant.component";



import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../Components/components.module';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { EtudiantRoutingModule } from "./Etudiant-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeleteEtudiantComponent } from "./delete-etudiant/delete-etudiant.component";
import { DeleteAllEtudiantComponent } from "./delete-all-etudiant/delete-all-etudiant.component";



@NgModule({
    declarations: [
    
      AddEtudiantComponent,
      ListEtudiantComponent,
     
      DeleteAllEtudiantComponent,
  
    ],
    imports: [
      CommonModule,
      ComponentsModule, 
      EtudiantRoutingModule ,
      FormsModule , 
      ReactiveFormsModule
      ]
    
    })
    export class EtudiantModule { }