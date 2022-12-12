import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/models/ModelContrat';
import { ContratServiceService } from 'src/app/service/contrat-service.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  contrats:any
  startDate:any
  endDate:any
  montant:any
  nbr:any
  id:any
  currentContrat: any = null;
  showDetails = false;


  constructor(private ServiceContrat:ContratServiceService , private acR:ActivatedRoute , private route:Router) { }

  ngOnInit(): void {
    this.ServiceContrat.fetchContrat().subscribe((c)=>{
    this.contrats=c 
    console.log(c)
  
  })
}
  getDetails(contrat: Contrat) {
    this.currentContrat= contrat;
    this.showDetails = true;
  }
  add(){
    this.showDetails=true;
  }

  getchifre(){
    this.ServiceContrat.getchifre(this.startDate,this.endDate).subscribe((d)=>{
      console.log(d)
      this.montant=d
    })
  }

  getnbr(){
    
    this.ServiceContrat.getnbrcontratV(this.startDate,this.endDate).subscribe((d)=>{
      console.log(d)
      this.nbr=d
    })
  }

  deletcontrat(id:any){
    
    this.ServiceContrat.deletContrat(id).subscribe(()=>{
      console.log('removed')
      window.location.reload();
      
    })
  }

  button(t:any){
    if(t){
      this.showDetails=false
      window.location.reload();
    }
 }

 pdfById(id:any){
  this.ServiceContrat.pdfByIds(id)
 }

 pdfList(){
  this.ServiceContrat.PrintPDF()
 }

}
