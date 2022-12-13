import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ReclamationServiceService } from 'src/app/Service/reclamation-service.service';
import { Reclamation } from '../model/Reclamation';

@Component({
  selector: 'app-listreclamation',
  templateUrl: './listreclamation.component.html',
  styleUrls: ['./listreclamation.component.css']
})
    export class ListreclamationComponent implements OnInit {
  id:any ;
  currentReclamation:any ;
  affichage=false ;


  constructor(private rs:ReclamationServiceService ,private router: Router , private acR : ActivatedRoute,private service:NotificationsService ) { }
  all:any ;

  ngOnInit(): void {
    this.rs.getAllreclamation().subscribe(
      (d)=>{
        this.all=d ; 
        console.log(this.all) ; 
        
  }  
 )
  }
  add(){
    this.affichage= true
   }
  deletereclamation(id:any){
  
  this.rs.deletereclamation(id).subscribe(
   ()=>{
   console.log("deleted")
   
   window.location.reload()
   
   
   this.router.navigate(['listreclamation'])
   
   }
  )  
  
  }
  getAffichage(reclamation :Reclamation){
  this.currentReclamation = reclamation ;
  this.affichage = true 
  
  
  
  }
  btn(t:any){
  if(t){
    this.affichage = false 
    window.location.reload(); 
  }
  } 
  deleteallrec(){
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(res){
    
    this.rs.deleteAllreclamation()
    .subscribe( ()=>{
      this.router.navigate(['listreclamation'])
        window.location.reload(); 
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
   
    
     
  
  
  
  

