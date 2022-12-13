import { Component, Input, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { UniversiteService } from '../universite.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css']
})
export class UpdateUniversiteComponent implements OnInit {
  @Input()univ:any;

  constructor(private service : UniversiteService,
    private toast : NgToastService) { }

  ngOnInit(): void {

  }

  updateUniv(univ:any){
    this.service.updateUniv(this.univ).subscribe(
      (        data: any) =>{
        this.toast.info({detail:"SUCCESS",summary:'Votre universite est mise a jour !'} )
      }
    )

  }

}




