import { Component, OnInit } from '@angular/core';
import { DetailequipeService } from 'src/app/detailequipe.service';
import { EquipeService } from 'src/app/equipe.service';

@Component({
  selector: 'app-listdetailequipe',
  templateUrl: './listdetailequipe.component.html',
  styleUrls: ['./listdetailequipe.component.css']
})
export class ListdetailequipeComponent implements OnInit {
  form : boolean = false;
  closeResult! : string;
 detailequipes:any = [];
 listeequipe: any[]= [];

  constructor(private serrvice : DetailequipeService ,private serrrvice :EquipeService) { }

  ngOnInit(): void {
    this.getAlldetailEquipe();
    
  }
  getAlldetailEquipe(){
    this.serrvice.getAllDetailEquipe().subscribe(data=> 
      
      {console.log(data);
        this.detailequipes.push(...data);},
    error =>console.log(error)
    )
  }
  getlistequipe():void{
    this.serrrvice.getAllEquipe().subscribe(data=>{
      this.listeequipe.push(...data);
    },error=>{
      console.log(error)
    
    
    
    })
  }
  ondelete =(idDetailEquipe:number)=>{
if (confirm ('Are you sure you want to delete this Detail equipe')){
  this.serrvice.deletedetailEquipe(idDetailEquipe).subscribe (response => {
    this.getAlldetailEquipe();
    console.log("suppresion re");

  },error=> console.log(error));}
  }
}