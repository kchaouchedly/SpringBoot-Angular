import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailequipeService } from 'src/app/detailequipe.service';
import { EquipeService } from 'src/app/equipe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editdetailequipe',
  templateUrl: './editdetailequipe.component.html',
  styleUrls: ['./editdetailequipe.component.css']
})
export class EditdetailequipeComponent implements OnInit {
  data:any;
  idDetailEquipe:any;
  showAlert = false;
  detailequipe:any;
  listeequipe: any[]= [];

  constructor(private route:ActivatedRoute,private serrvice:DetailequipeService ,private service1:EquipeService ,private router:Router) { }
  public getDEquipe(idDetailEquipe : any){
 
    this.serrvice.getoneDetailEquipe(idDetailEquipe).subscribe()
   }
   ngOnInit() {
    this.getlistemploye();
    this.idDetailEquipe = this.route.snapshot.params['idDetailEquipe'];
   let resp= this.serrvice.getoneDetailEquipe(this.idDetailEquipe)
   resp.subscribe((data)=>
   {this.detailequipe=data
    
  });
    };

    closeAlert() {
      this.showAlert = false;
    }
    editDetailEquipe(f:any){
      this.serrvice.editdetailEquipee(f,this.detailequipe.idDetailEquipe).subscribe((response) => {
        this.router.navigateByUrl("/listedetailequipe");
        this.showAlert = true;
        console.log(response);
      });
    
    
    
    }
    getlistemploye():void{
      this.service1.getAllEquipe().subscribe(data=>{
        this.listeequipe.push(...data);
      },error=>{
        console.log(error)
      
      
      
      })
      
      }
    
}
