import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AddContratComponent } from './Contrat/add-contrat/add-contrat.component';

const routes: Routes = [
  {path:'',redirectTo:'Dashboard',pathMatch:'full'},
  {path:'Dashboard' , component:DashboardComponent } , 

  {path:'Contrat',component:AddContratComponent, children:[
  {path:'addcontrat',component:AddContratComponent},
    ]},
  //{path:'header' , component:HeaderComponent } , 
  //{path:'sidebar' , component:SidebarComponent },
  //{path:'addcontrat',component:AddContratComponent},
  
  {path:'Contrat', loadChildren:()=>import('./Contrat/contrat-module').then((m)=>{return m.ContartModule})}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
