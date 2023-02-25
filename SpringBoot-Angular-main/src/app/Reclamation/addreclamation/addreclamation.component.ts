import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { ReclamationServiceService } from 'src/app/Service/reclamation-service.service';
import { Reclamation } from '../model/Reclamation';

@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.css']
})
export class addreclamationComponent implements OnInit {
  formgroup = new UntypedFormGroup({
    nomRec: new UntypedFormControl('',[Validators.required, Validators.pattern('[A-Z a-z]*') , Validators.minLength(5),Validators.maxLength(10) ]),
    sujet:new UntypedFormControl('',[Validators.required]),
   contenu:new UntypedFormControl('',[Validators.required, Validators.pattern('[A-Z a-z]*') , Validators.minLength(3)]),
    daterec:new UntypedFormControl('',[Validators.required]),
  
   
})  
get name(){
  return this.formgroup.get("nomRec");
}
get sujet(){
  return this.formgroup.get("sujet");
}
get contenu(){
  return this.formgroup.get("contenu");
}
get daterec(){
  return this.formgroup.get("daterec");
}

editMode = false ; 
@Input() data:any
@Output() btn = new EventEmitter () ; 
subscriptions = new Subscription();
reclamation : Reclamation= new Reclamation(); 

constructor(private rs:ReclamationServiceService , private router:Router , private route : ActivatedRoute,private service:NotificationsService  ) { 

}

ngOnInit(): void {
//console.log(this.data)

if(this.data!=null){
  this.editMode=true
  this.formgroup.patchValue(this.data)
  
 
}}
submit(f:any){
  if (this.editMode){
   
    this.updatereclamation()
  } else 
  {
    this.addreclamation(); 
  }
} 
 


addreclamation(){
  
  this.rs.addreclamation(this.formgroup.value).subscribe(()=>{
  
    this.router.navigate(['listreclamation'])
    this.btn.emit(true)
    window.location.reload();
    
  

  }
  )

}
updatereclamation(){
this.rs.updateallreclamation( this.formgroup.value ,this.data.idReclamation ).subscribe(()=>
{  
  console.log("updated !!!! ") 
  this.router.navigate(['listreclamation'])
  this.btn.emit(true)
  window.location.reload(); 

 }   )

}
onSuccess(message:any){
this.service.success('success',message,{
  position:['bottom','right'],
  timeOut:10000000,
  animate:'fade',
  showProgressBar:true,
  clickToClose: true

});

}


}
