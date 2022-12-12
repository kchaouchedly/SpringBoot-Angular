import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contrat } from 'src/app/models/ModelContrat';
import { ContratServiceService } from 'src/app/service/contrat-service.service';
import { creatDateRangeValidator} from 'src/app/Contrat/add-contrat/ValidatorsDate'
@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
@Input() data: any;
@Output()button=new EventEmitter();
editMode = false;
contrat= new Contrat();
subscriptions = new Subscription();
etudiants:any
c= new Contrat()
idEtudiant:any
fg = new FormGroup({
  dateDebutContrat:new FormControl('',[Validators.required,]),
  dateFinContrat:new FormControl('',Validators.required),
  specialite:new FormControl('',Validators.required),
  montantContrat:new FormControl('',[Validators.required, Validators.pattern('[0-9]*')])
  
}
, {
  validators: [creatDateRangeValidator()]
}
)
  constructor( private serviceContrat:ContratServiceService ,private router:Router , private route:ActivatedRoute ) {}

   get dateDebutContrat (){
    return this.fg.get('dateDebutContrat')
  }
  get dateFinContrat (){
    return this.fg.get('dateFinContrat')
  }
  get specialite (){
    return this.fg.get('specialite')
  }
  get montantContrat (){
    return this.fg.get('montantContrat')
  }
  ngOnInit(): void {

    if(this.data!=null){
      this.editMode=true
      this.fg.patchValue(this.data)
     // =this.data
     }

     this.serviceContrat.fetchEtudiants().subscribe((data)=>{
      this.etudiants=data
     })
      
  }
  submit(f:any) {

    if (this.editMode) {
      this.updatecontrat();
    } else {
      this.addContrat();
    }
  }
  addContrat(){
      
     this.serviceContrat.addContrat(this.fg.value).subscribe((d)=>{
      this.serviceContrat.emailNewContrat(this.idEtudiant,this.fg.value.dateDebutContrat,this.fg.value.dateFinContrat,this.fg.value.specialite,this.fg.value.montantContrat).subscribe(()=>{
        console.log("done")
      })
      this.serviceContrat.affecterCE(d,this.idEtudiant).subscribe(()=>{
      console.log("affected") 
      })
      console.log(this.contrat)
      this.router.navigate(['listcontrat'])
      this.button.emit(true)
     
    })
  }

  updatecontrat(){
      this.serviceContrat.updateContrat(this.fg.value,this.data.idContrat).subscribe(()=>{
        console.log('updated')
        this.router.navigate(['listcontrat'])
        this.button.emit(true)
        
      })
    
  }
  



}

