import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppModule } from "../app.module";
import { ErrorsComponent } from '../errors/errors.component';
import { UniversiteRoutingModule } from './universite-routing.module';
import { ErrorsModule } from '../errors/Errors/Errors.module';
import { ComponentsModule } from '../Components/components.module';



@NgModule({
    declarations: [
        ListUniversiteComponent,
        UpdateUniversiteComponent,

        UpdateUniversiteComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorsModule,
        UniversiteRoutingModule,
      
    ]
})
export class UniversiteModule { }
