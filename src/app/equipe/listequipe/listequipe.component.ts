import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { EquipeService } from 'src/app/equipe.service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';


@Component({
  selector: 'app-listequipe',
  templateUrl: './listequipe.component.html',
  styleUrls: ['./listequipe.component.css']
})

export class ListequipeComponent implements OnInit {
  form : boolean = false;
  show=false;
  CURRENTINDEX = -1;
  PAGE =0;
  PAGESIZE=3;
  closeResult! : string;
  i:any;

 Observable:any;
 listequipes: any = [];
 singleEquipe:any;
 count =0;
nomEquipe: any;


  constructor(private service:EquipeService) { }
  getAllEquipe(){
    //this.service.getAllEquipe().subscribe(res => this.equipes = res)
  }
  public deleteEquipe(idEquipe :any){
 
    this.service.deleteEquipe(idEquipe).subscribe(() => this.getequipespaging())
   }


  ngOnInit(): void {
    this.getequipespaging()
 
  }
  getUsersListPdf(){
    this.service.exportEquipe().toPromise().then((data:any)=>
    {
      let downloadURL=window.URL.createObjectURL(data)
      let link=document.createElement('a')
      link.href=downloadURL
      link.download="equipe.pdf"
      link.click()
    }).catch((err)=>{
      console.log("erreur a afficher les utilisateurs");
    })
  }
  getListexcel(){
    this.service.exportEquipeexcel().subscribe(x=>{
    const blob=new Blob([x], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    
    let downloadURL=window.URL.createObjectURL(x)
      let link=document.createElement('a')
      link.href=downloadURL
      link.download="equipe.xlsx"
      link.click()
    })
}
 showFormUpdate(p:any){
  this.singleEquipe=p;
this.show=true;
}

afterrecvData(t:any){
  console.log(t)
    }
    getRequestParams(page:number,pageSize:number):any{

      let params:any = {};
      if(page){
params['page'] = page -1;


      }
      if(pageSize){
        params['size'] = pageSize;
      }
return params;
    }
    getequipespaging(): void{
const params = this.getRequestParams(this.PAGE, this.PAGESIZE);
this.service.getAllEquipeByPagination(params).subscribe(reponse=>{
const {equipes,totalItems} = reponse;
this.listequipes= equipes;
this.count = totalItems;
console.log(equipes);
}, error=> console.log(error));


    }
    handlepagechange(event:number){

this.PAGE =event;
this.getequipespaging();

    }
    handlepagesizechange(event:any){
this.PAGESIZE = event.target.value;
this.PAGE = 1;
this.getequipespaging();


    }
    public findEquipeByNOm(nomEquipe:any){
      this.service.getEquipeByNom(nomEquipe).subscribe(() => this.getAllEquipe())
     }
  
}


