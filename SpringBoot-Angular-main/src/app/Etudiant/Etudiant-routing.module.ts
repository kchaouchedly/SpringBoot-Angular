import { Route, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../Components/dashboard/dashboard.component";
import { AddEtudiantComponent } from "./add-etudiant/add-etudiant.component";
import { ListEtudiantComponent } from "./list-etudiant/list-etudiant.component";

import { Component, NgModule } from '@angular/core';
import { DeleteEtudiantComponent } from "./delete-etudiant/delete-etudiant.component";



const routes: Routes = [ 

    {
        path:'addetudiant', component:AddEtudiantComponent
     },
      {path:'listetudiant', component:ListEtudiantComponent},
      {path:'deleteAllEtud', component:ListEtudiantComponent},
    {path:'deleteetudiant/:id',component:DeleteEtudiantComponent},
      {path:'Dashboard',component:DashboardComponent } ,
      {path:'updatetud/:id' , component:AddEtudiantComponent}
    
    ]; 
    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class EtudiantRoutingModule { }