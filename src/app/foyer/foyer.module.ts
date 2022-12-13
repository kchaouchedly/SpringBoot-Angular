import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFoyerComponent } from './list-foyer/list-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { ErrorsComponent } from '../errors/errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoyerRoutingModule } from './foyer-routing.module';
import { ErrorsModule } from '../errors/Errors/Errors.module';



@NgModule({
  declarations: [
    ListFoyerComponent,
    UpdateFoyerComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FoyerRoutingModule,
    ErrorsModule


  ]
})
export class FoyerModule { }
