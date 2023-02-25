import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from '../universite';
import { UniversiteService } from '../universite.service';
import { Subscription } from 'rxjs';
import {  ViewChild, ElementRef } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { FormsModule }   from '@angular/forms';



@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {

  universites:Universite []=[];
  univ = new Universite();
affichage =  false
  singleUni: any;


  constructor(private universiteService : UniversiteService ,private router: Router ,
     private acR : ActivatedRoute  ,private toast: NgToastService) { }

  ngOnInit(): void {

      this.affichageUniv()

        }

        affichageUniv(){
          this.universiteService.getAllUniversite().subscribe((data)=>
          this.universites = data)
        }

        ajouterUniv(f:any){
          this.universiteService.addUniversite(f).subscribe(
            (data) =>{
            //  this.toast.success({detail:"SUCCESS",summary:'Votre universite est ajouté !'} )
              this.affichageUniv() }   ); }




        delete(i:any){
          this.universites.splice(i,1)}

   /*     deleteUniv(id:any,i:any){
          if (confirm("do you really want to delete this item ?"))
          {
      this.universiteService.deleteUniversite(id).subscribe(),
      this.delete(i),
     this.toast.error({detail:"DELETE",summary:'Votre universite est supprimé !',duration:3000} )
          }
        }*/

        showFormUpdate(p:any){
          this.singleUni=p;
          this.affichage=true;

        }

      }
