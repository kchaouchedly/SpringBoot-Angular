import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../Components/dashboard/dashboard.component";
import { addreclamationComponent } from './addreclamation/addreclamation.component';
import { ListreclamationComponent } from './listreclamation/listreclamation.component';


const routes: Routes = [ 

{
    path:'addreclamation', component:addreclamationComponent
  
},
  {path:'listreclamation', component:ListreclamationComponent},
  {path:'updatereclamation/:id', component:addreclamationComponent},
  
  {path:'Dashboard' , component:DashboardComponent } 

]; 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class ReclamationRoutingModule { }