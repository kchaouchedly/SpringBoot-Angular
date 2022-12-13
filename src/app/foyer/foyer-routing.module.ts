import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFoyerComponent } from './list-foyer/list-foyer.component';



const routes: Routes = [
  {
    path: "",
    component: ListFoyerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule{}
