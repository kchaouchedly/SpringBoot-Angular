import { Component, OnInit,ViewChild,Output,Input, OnChanges,  SimpleChanges } from '@angular/core';
//import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
//import * as jsPDF from 'jspdf'; 
import { DepartementServiceService } from 'src/app/Service/departement-service.service';
import { Departement } from '../model/Departement';


@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {
  id:any ;
  currentDepartement:any ;
  affichage=false ;
  pageSlice: any;

  
 


  constructor(private ds:DepartementServiceService ,private router: Router , private acR : ActivatedRoute,private service:NotificationsService ) { }
  all:any ;
  
  ngOnInit(): void {
    this.ds.getAlldepartement().subscribe(
      (d)=>{
        this.all=d ; 
        console.log(this.all) ; 
        
  }  
 )}
 
 add(){
  this.affichage= true
 }
deletedepartement(id:any){

this.ds.deleteDepartement(id).subscribe(
 ()=>{
 console.log("deleted")
 
 window.location.reload()
 
 
 this.router.navigate(['listdepartement'])
 
 }
)  

}
getAffichage(departement :Departement){
this.currentDepartement = departement ;
this.affichage = true 



}
btn(t:any){
if(t){
  this.affichage = false 
  window.location.reload(); 
}
} 
deletealldepart(){
  var res = confirm("Êtes-vous sûr de vouloir supprimer?");
  if(res){
  
  this.ds.deleteAllDepartements().subscribe( ()=>{
 
      window.location.reload()
      this.router.navigate(['listdepartement'])
    })
 

}
 
  

}
notform(message:any){
  this.service.info('infos',message,{
    position:['bottom','right'],
    timeOut:10000,
    animate:'fade',
    showProgressBar:true

  });
}
notsupp(message:any){
  this.service.alert('infos',message,{
    position:['bottom','right'],
    timeOut:100000,
    animate:'fade',
    showProgressBar:true,
    pauseOnHover: true,
    clickToClose: true,
    preventLastDuplicates:true 


  });
}




  }
 
  
   



