import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AddContratComponent } from './Contrat/add-contrat/add-contrat.component';
import { AdddetailequipeComponent } from './detail-equipe/adddetailequipe/adddetailequipe.component';
import { EditdetailequipeComponent } from './detail-equipe/editdetailequipe/editdetailequipe.component';
import { AddequipeComponent } from './equipe/addequipe/addequipe.component';

const routes: Routes = [
  {path:'',redirectTo:'Dashboard',pathMatch:'full'},
  {path:'Dashboard' , component:DashboardComponent } , 

  {path:'Contrat',component:AddContratComponent, children:[
  {path:'addcontrat',component:AddContratComponent},
    ]},
    
  {path:'Contrat',component:AddContratComponent, children:[
  {path:'addcontrat',component:AddContratComponent},
    ]},
    {path:'Equipe',component:AddequipeComponent, children:[
      {path:'addequipe',component:AddequipeComponent},
        ]},
          {path:'DetailEquipe',component:AddequipeComponent, children:[
            {path:'adddetailequipe',component:AdddetailequipeComponent},
            {path:'editdetailequipe/:idDetailEquipe', component:EditdetailequipeComponent}
              ]},
        
      
  //{path:'header' , component:HeaderComponent } , 
  //{path:'sidebar' , component:SidebarComponent },
  //{path:'addcontrat',component:AddContratComponent},
  
  {path:'Contrat', loadChildren:()=>import('./Contrat/contrat-module').then((m)=>{return m.ContartModule})},
  

  {path:'Equipe', loadChildren:()=>import('./equipe/equipe.module').then((m)=>{return m.EquipeModule})},
  {path:'DetailEquipe', loadChildren:()=>import('./detail-equipe/detail-equipe.module').then((m)=>{return m.DetailEquipeModule})},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
