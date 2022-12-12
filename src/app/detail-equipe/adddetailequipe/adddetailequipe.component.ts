import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EquipeService } from 'src/app/equipe.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { DetailequipeService } from 'src/app/detailequipe.service';
import { DetailEquipe } from 'src/app/Detailequipe';
@Component({
  selector: 'app-adddetailequipe',
  templateUrl: './adddetailequipe.component.html',
  styleUrls: ['./adddetailequipe.component.css']
})
export class AdddetailequipeComponent implements OnInit {
detailequipeform :FormGroup;
submitted = false;
listeequipe: any[]= [];
public message: string;

form : boolean = false;
detailequipe! :DetailEquipe
  constructor(public servicee:DetailequipeService, private fb :FormBuilder ,private router:Router ,private service1:EquipeService) { }

  ngOnInit(): void {
    

    this.getlistemploye();
 
    this.detailequipe = {
      salle: null,
      thematique: null,
      idEquipe: null
    
    }
  }
  
  get  f() {return this.detailequipeform.controls}
submit(p:any){
  this.servicee.AdddEquipe(p).subscribe(()=> this.router.navigateByUrl("/listedetailequipe"))
    

  

}
getlistemploye():void{
this.service1.getAllEquipe().subscribe(data=>{
  this.listeequipe.push(...data);
},error=>{
  console.log(error)



})

}


}
