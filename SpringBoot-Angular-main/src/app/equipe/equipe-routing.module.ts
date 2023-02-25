import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { AddequipeComponent } from './addequipe/addequipe.component';
import { EditequipeComponent } from './editequipe/editequipe.component';
import { ListeequipefrontComponent } from './listeequipefront/listeequipefront.component';
import { ListequipeComponent } from './listequipe/listequipe.component';

const routes: Routes = [
  {
    path:'addequipe', component:AddequipeComponent
  
},
  {path:'listequipe', component:ListequipeComponent},
  {path:'listfrontequipe', component:ListeequipefrontComponent},
  {path:'Dashboard' , component:DashboardComponent } ,
  {path:'editequipe/:idEquipe', component:EditequipeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
