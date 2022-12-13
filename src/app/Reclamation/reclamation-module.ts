import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../Components/components.module";
import { addreclamationComponent } from "./addreclamation/addreclamation.component";
import { ListreclamationComponent } from "./listreclamation/listreclamation.component";
import { ReclamationRoutingModule } from "./Reclamation-routing.module";



@NgModule({
    declarations: [
    addreclamationComponent,
      ListreclamationComponent
    
  
    ],
    imports: [
      CommonModule,
    ReclamationRoutingModule,
      ComponentsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ]
  
  })
  export class ReclamationModule { }
  