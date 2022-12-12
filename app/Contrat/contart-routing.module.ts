
import { AddContratComponent } from "./add-contrat/add-contrat.component";

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContratComponent } from "./list-contrat/list-contrat.component";
import { DashboardComponent } from "../Components/dashboard/dashboard.component";
import { DeletContratComponent } from "./delet-contrat/delet-contrat.component";
import { UpdateContratComponent } from "./update-contrat/update-contrat.component";


const routes: Routes = [ 

{path:'addcontrat', component:AddContratComponent },
{path:'listcontrat', component:ListContratComponent},
{path:'Dashboard' , component:DashboardComponent } ,
{path:'deletContrat/:id' , component:DeletContratComponent},
{path:'updateContrat/:id' , component:AddContratComponent},
  

]; 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class ContratRoutingModule { }