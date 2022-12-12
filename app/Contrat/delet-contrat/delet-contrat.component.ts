import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratServiceService } from 'src/app/service/contrat-service.service';

@Component({
  selector: 'app-delet-contrat',
  templateUrl: './delet-contrat.component.html',
  styleUrls: ['./delet-contrat.component.css']
})
export class DeletContratComponent implements OnInit {
id:any
  constructor(private ContratService:ContratServiceService, private acR:ActivatedRoute,
   private router:Router ) { }

  ngOnInit(): void {
    this.id=this.acR.snapshot.params['id']
    this.ContratService.deletContrat(this.id).subscribe(()=>{
      console.log('removed')
      this.router.navigate(['listcontrat'])
    })
  }

}
