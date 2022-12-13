import { Component, OnInit } from '@angular/core';

import { UntypedFormGroup,UntypedFormBuilder,Validators } from '@angular/forms';

import { EquipeService } from 'src/app/equipe.service';
import { Router } from '@angular/router';

import { DetailequipeService } from 'src/app/detailequipe.service';
import { DetailEquipe } from 'src/app/Detailequipe';
@Component({
  selector: 'app-adddetailequipe',
  templateUrl: './adddetailequipe.component.html',
  styleUrls: ['./adddetailequipe.component.css']
})
export class AdddetailequipeComponent implements OnInit {
detailequipeform :UntypedFormGroup;
submitted = false;
listeequipe: any[]= [];
public message: string;

form : boolean = false;
detailequipe! :DetailEquipe
  constructor(public servicee:DetailequipeService, private fb :UntypedFormBuilder ,private router:Router ,private service1:EquipeService) { }

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
