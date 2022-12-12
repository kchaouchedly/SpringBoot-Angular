import { Component, OnInit ,Inject} from '@angular/core';
import { Equipe } from 'src/app/equipe';
import { FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EquipeService } from 'src/app/equipe.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { DetailEquipe } from 'src/app/Detailequipe';

@Component({
  selector: 'app-addequipe',
  templateUrl: './addequipe.component.html',
  styleUrls: ['./addequipe.component.css']
})
export class AddequipeComponent implements OnInit {
equipeform :FormGroup;
submitted = false;
userFile:any;
public imagePath:any;
imgURL: any;
public message: string;
detailequipe:any;
constructor(public service:EquipeService, private fb :FormBuilder ,private router:Router,){ 
  this.equipeform=this.fb.group({
  
 
   
  });
}


ngOnInit(): void {
  this.equipeform = this.fb.group({
    nomEquipe:['',Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(2)],
    niveau:['',Validators.required]
  })

    
}
 get  f() {return this.equipeform.controls}
submit():void{
  this.submitted=true;
  if(this.equipeform.invalid){
    return;
  }else{
    console.log(this.equipeform.value)
    this.service.AddEquipe(this.equipeform.value).subscribe(()=> this.router.navigateByUrl("/listequipe"))
    
    

  }
  


}
get niveau() { return this.equipeform.get('niveau');

}
onSubmit() {
  if (this.service.choixmenu == "A")
  {
    this.addData();
  }
  else
  {
  this.updateData()
  }   
}
onSelectFile(event:any) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile = file;
   // this.f['profile'].setValue(file);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  
  this.imagePath = file;
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}


}

addData() {
  const formData = new  FormData();
  const article = this.service.dataForm.value;
  formData.append('article',JSON.stringify(article));
  formData.append('file',this.userFile);
  this.service.createData(formData).subscribe( data => {
  
    this.router.navigate(['/listequipe']); 
  });
}
  updateData()
  {
    this.service.updatedata(this.service.dataForm.value.id,this.service.dataForm.value).
    subscribe( data => {
 
      this.router.navigate(['/listequipe']); 
    });
  }


}
