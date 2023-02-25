import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddetailequipeComponent } from './adddetailequipe/adddetailequipe.component';
import { EditdetailequipeComponent } from './editdetailequipe/editdetailequipe.component';
import { ListdetailequipeComponent } from './listdetailequipe/listdetailequipe.component';

const routes: Routes = [
  {path:'listedetailequipe', component:ListdetailequipeComponent},
  {path:'editdetailequipe/:idDetailEquipe', component:EditdetailequipeComponent},
  {path:'adddetailequipe', component:AdddetailequipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DetailEquipeRoutingModule { }
