import { Component, OnInit, Input } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { FormsModule }   from '@angular/forms';
import { FoyerService } from '../foyer.service';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent implements OnInit {
  @Input()foy :any;

  constructor(private service : FoyerService,
    private toast : NgToastService) { }

  ngOnInit(): void {
  }
  updateUniv(){
    this.service.updateFoyer(this.foy).subscribe(
      (        data: any) =>{
        this.toast.info({detail:"SUCCESS",summary:'Votre Foyer est mise a jour !'} )
      }
    )

  }

}
