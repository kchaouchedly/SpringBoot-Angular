import { Component, OnInit  ,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoyerService } from '../foyer.service';

import {  ViewChild, ElementRef } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { FormsModule }   from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from '../foyer';

@Component({
  selector: 'app-list-foyer',
  templateUrl: './list-foyer.component.html',
  styleUrls: ['./list-foyer.component.css']
})
export class ListFoyerComponent implements OnInit {



  foyer:Foyer []=[];
  foy = new Foyer();
affichage =  false
  singleFoy: any;
  foyers: any;


  constructor(private foyerservice : FoyerService ,private router: Router ,
     private acR : ActivatedRoute,private toast: NgToastService) { }

  ngOnInit(): void {

      this.affichageFoy()

        }

        affichageFoy(){
          this.foyerservice.getAllFoyer().subscribe((data: any)=>
          this.foyers = data)
        }




   ajouterfoyer(f:any){
    this.foyerservice.addFoyer(f).subscribe(
      (data:any) =>{
        this.toast.success({detail:"SUCCESS",summary:'Votre foyer est ajouté !'} )
        this.affichageFoy() }   ); }


        delete(i:any){
          this.foyers.splice(i,1)}

        deleteFoy(id:any,i:any){
          if (confirm("do you really want to delete this item ?"))
          {
      this.foyerservice.deleteFoyer(id).subscribe(),
      this.delete(i),
      this.toast.error({detail:"DELETE",summary:'Votre universite est supprimé !',duration:3000} )
          }
        }

        showFormUpdate(p:any){
          this.singleFoy=p;
          this.affichage=true;

        }

}
