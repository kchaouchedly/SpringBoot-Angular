import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantServiceService } from 'src/app/service/etudiant-service.service';
import { DeleteEtudiantComponent } from '../delete-etudiant/delete-etudiant.component';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})


export class ListEtudiantComponent implements OnInit {
id : any
currentEtudiant : any 
affichage =  false
constructor(private service : EtudiantServiceService ,private router: Router , private acR : ActivatedRoute) { }
all:any
ngOnInit( ): void {
    this.service.getAllEtudiant().subscribe(
      (e)=>{
        this.all=e ; 
        console.log(this.all) ; 
  }  
 )
 
  
  }
  add(){
    this.affichage= true
   }
deleteetu(id:any){
 
  this.service.deleteEtudiants(id).subscribe(
   ()=>{
   console.log("deleted")
   window.location.reload()
   //this.router.navigate(['listetudiant'])
   }
  )  

}
getAffichage(etudiant : Etudiant){
  this.currentEtudiant = etudiant 
  this.affichage = true 
}
btn(t:any){
  if(t){
    this.affichage = false 
    window.location.reload(); 
  }
}
  

}
