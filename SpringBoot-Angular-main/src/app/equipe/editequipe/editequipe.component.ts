import { Component, OnInit, EventEmitter, Input, OnChanges,  Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EquipeService } from 'src/app/equipe.service';

@Component({
  selector: 'app-editequipe',
  templateUrl: './editequipe.component.html',
  styleUrls: ['./editequipe.component.css']
})
export class EditequipeComponent implements OnInit,OnChanges {
  showalert =false;
  @Input()equipe:any;
  @Output() test=new EventEmitter();
    constructor( private Service:EquipeService,private router:Router) { }
  
    ngOnInit(): void {
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log(this.equipe)
    }
  onSubmitUpdate(f:any){
    console.log(f) ;
    console.log(this.equipe.idEquipe)
       this.Service.editEquipee(f,this.equipe.idEquipe).subscribe(
      ()=>{
       
        this.test.emit(this.showalert=true)
      }
    );
  }
  sendMsgToParent(){
 
  }
  closeAlert() {
    this.showalert = false;
  }

onclose(){
  this.router.navigateByUrl("/listequipe");

}


  }


