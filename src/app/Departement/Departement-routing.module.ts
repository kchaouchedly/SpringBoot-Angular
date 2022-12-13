import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../Components/dashboard/dashboard.component";
import { AddDepartementComponent } from "./add-departement/add-departement.component";
import { ListDepartementComponent } from "./list-departement/list-departement.component";

const routes: Routes = [ 

{
    path:'adddepartement', component:AddDepartementComponent 
  
},
  {path:'listdepartement', component:ListDepartementComponent},
  {path:'updatedepartement/:id', component:AddDepartementComponent},
  
  {path:'Dashboard' , component:DashboardComponent } 

]; 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class DepartementRoutingModule { }