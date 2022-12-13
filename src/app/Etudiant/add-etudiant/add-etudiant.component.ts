import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantServiceService } from 'src/app/service/etudiant-service.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
   
formgroup = new UntypedFormGroup({
 // email: new FormContro('', {nonNullable: true}),
  nomE: new UntypedFormControl('',[Validators.required, Validators.pattern('[A-Z a-z]*') , Validators.minLength(5),Validators.maxLength(10) ]) , 
  prenomE:new UntypedFormControl ('',[Validators.required, Validators.pattern('[A-Z a-z]*') , Validators.minLength(5),Validators.maxLength(10) ]),
  datedebut: new UntypedFormControl('',[Validators.required  ] ),
  opt: new UntypedFormControl('',[Validators.required]) ,
})
get name(){
  return this.formgroup.get('nomE')
}
get prenom(){
  return this.formgroup.get('prenomE')
}
get opt(){
  return this.formgroup.get('opt')
}
get datedebut(){
  return this.formgroup.get('datedebut')
}
 editMode = false ; 
  @Input() data:any
  @Output() btn = new EventEmitter () ; 
subscriptions = new Subscription();
etudiant : Etudiant= new Etudiant(); 

constructor(private es:EtudiantServiceService, private router:Router , private route : ActivatedRoute) { 
   
  
}

  ngOnInit(): void { 
    if(this.data!=null){
      this.editMode=true
      this.formgroup.patchValue(this.data)
    }
   
} 
  submit(f:any){
    if (this.editMode){
      this.updateEtud()
    } else 
    {
      this.addEtudiant(); 
    }
  } 
  addEtudiant(){
    this.es.addEtudiantS(this.formgroup.value).subscribe(()=>{
    this.router.navigate(['listetudiant'])
    this.btn.emit(true)

   
  }
  )}
  updateEtud(){
    this.es.updateAllEtudiant(this.formgroup.value, this.data.idEtudiant).subscribe(()=>
{  
      console.log("updated !!!! ") 
      this.router.navigate(['listetudiant'])
      this.btn.emit(true)
      window.location.reload(); 
  
     }   )

}

}
