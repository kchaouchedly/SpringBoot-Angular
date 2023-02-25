import { Component, EventEmitter,Output,Input, OnChanges,  SimpleChanges ,OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartementServiceService } from 'src/app/Service/departement-service.service';
import { Departement } from '../model/Departement';
import { NotificationsService, SimpleNotificationsModule} from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
  
})
export class AddDepartementComponent implements OnInit {
  
  

    formgroup = new UntypedFormGroup({
    nomDepart: new UntypedFormControl('',[Validators.required, Validators.pattern('[A-Z a-z]*') , Validators.minLength(5),Validators.maxLength(10) ]),
    email:new UntypedFormControl('',[Validators.required,Validators.email]),
    emplacement:new UntypedFormControl('',[Validators.required, Validators.pattern('[A-Z a-z]*') , Validators.minLength(3),Validators.maxLength(10) ]),
    section:new UntypedFormControl('',[Validators.required]),
    description:new UntypedFormControl(''),

})  
  

  get name(){
    return this.formgroup.get("nomDepart");
  }
  get email(){
    return this.formgroup.get("email");
  }
  get emplacement(){
    return this.formgroup.get("emplacement");
  }
  get section(){
    return this.formgroup.get("section");
  }
  get description(){
    return this.formgroup.get("description");
  }
  editMode = false ; 
  @Input() data:any
  @Output() btn = new EventEmitter () ; 
subscriptions = new Subscription();
departement : Departement= new Departement(); 

constructor(private ds:DepartementServiceService , private router:Router , private route : ActivatedRoute,private service:NotificationsService  ) { 
  
}

ngOnInit(): void {
  //console.log(this.data)
 
  if(this.data!=null){
    this.editMode=true
    this.formgroup.patchValue(this.data)
    
   
  }}
  submit(f:any){
    if (this.editMode){
     
      this.updatedepartement()
    } else 
    {
      this.adddepartement(); 
    }
  } 
   


  adddepartement(){
    
    this.ds.adddepartement(this.formgroup.value).subscribe(()=>{
    
      this.router.navigate(['listdepartement'])
      this.btn.emit(true)
      window.location.reload();
      
    
  
    }
    )

}
updatedepartement(){
  this.ds.updatealldepartement( this.formgroup.value ,this.data.idDepartment ).subscribe(()=>
{  
    console.log("updated !!!! ") 
    this.router.navigate(['listdepartement'])
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
