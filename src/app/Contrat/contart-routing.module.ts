
import { AddContratComponent } from "./add-contrat/add-contrat.component";

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContratComponent } from "./list-contrat/list-contrat.component";
import { DashboardComponent } from "../Components/dashboard/dashboard.component";


const routes: Routes = [ 

{
    path:'addcontrat', component:AddContratComponent 
  
},
  {path:'listcontrat', component:ListContratComponent},
  {path:'Dashboard' , component:DashboardComponent } 

]; 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class ContratRoutingModule { }