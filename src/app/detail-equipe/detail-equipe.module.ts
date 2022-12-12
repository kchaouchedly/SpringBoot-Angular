import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../Components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgbModal, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailEquipeRoutingModule } from './detail-equipe-routing.module';
import { ListdetailequipeComponent } from './listdetailequipe/listdetailequipe.component';
import { DetailequipeService } from '../detailequipe.service';
import { BrowserModule } from '@angular/platform-browser';
import { AdddetailequipeComponent } from './adddetailequipe/adddetailequipe.component';
import { EditdetailequipeComponent } from './editdetailequipe/editdetailequipe.component';

@NgModule({
  declarations: [
    ListdetailequipeComponent,
    AdddetailequipeComponent,
    EditdetailequipeComponent
  ],
  imports: [
    CommonModule,
    DetailEquipeRoutingModule,
 ComponentsModule,
    FormsModule,HttpClientModule,
   NgbModalModule, NgbModule,
   BrowserModule,
   ReactiveFormsModule
  ],providers: [DetailequipeService],
})
export class DetailEquipeModule { }
