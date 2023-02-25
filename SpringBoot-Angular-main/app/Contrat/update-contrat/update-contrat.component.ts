import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/models/ModelContrat';
import { ContratServiceService } from 'src/app/service/contrat-service.service';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {
id:any
c:any
contrat:any
dateDebutContrat:any
dateFinContrat:any
specialite:any
montantContrat:any
element:any
contrattt : Contrat = new Contrat();

  constructor(private contratService:ContratServiceService, private acR:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.id=this.acR.snapshot.params['id']
    this.contratService.fetchContrat().subscribe((d)=>{
     this.contrat = d
     console.log(d)
    
     for (let i = 0; i < 5; i = i + 1) {
      console.log(i)
      if (this.contrat[i].idContrat==this.id)
      {
        this.c=this.contrat[i]
        console.log(this.c)
        this.contrattt.montantContrat=this.c.montantContrat
        this.contrattt.dateDebutContrat=this.c.dateDebutContrat
        this.contrattt.dateFinContrat=this.c.dateFinContrat
        this.contrattt.specialite=this.c.specialite
      }
  }

    
    })
  }

  updatecontrat(){
   
    //this.contratService.getContratById(this.id).subscribe((d)=>{
    /* console.log(this.c)
     this.element.montantContrat=this.montantContrat
     this.element.dateDebutContrat=this.dateDebutContrat
     this.element.dateFinContrat= this.dateFinContrat
     this.element.specialite=this.specialite*/

      this.contratService.updateContrat(this.contrattt,this.id).subscribe(()=>{
        console.log('updated')
        this.route.navigate(['listcontrat'])
      })
    
  }

}
