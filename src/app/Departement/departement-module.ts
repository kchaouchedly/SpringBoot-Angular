import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../Components/components.module";
import { AddDepartementComponent } from "./add-departement/add-departement.component";
import { DepartementRoutingModule } from "./Departement-routing.module";

import { ListDepartementComponent } from "./list-departement/list-departement.component";

@NgModule({
    declarations: [
    
      AddDepartementComponent,
      ListDepartementComponent,
    
  
    ],
    imports: [
      CommonModule,
      DepartementRoutingModule,
      ComponentsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ]
  
  })
  export class DepartementModule { }
  