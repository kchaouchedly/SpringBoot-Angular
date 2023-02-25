import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantServiceService } from 'src/app/service/etudiant-service.service';

@Component({
  selector: 'app-delete-all-etudiant',
  templateUrl: './delete-all-etudiant.component.html',
  styleUrls: ['./delete-all-etudiant.component.css']
})
export class DeleteAllEtudiantComponent implements OnInit {
 
    
  constructor(private etudiantservice:EtudiantServiceService, private acR:ActivatedRoute,  private router: Router) { }

  ngOnInit(): void { 
    this.etudiantservice.deleteAllEtudiant()
      .subscribe(
        ()=>{
        console.log("deleted")
        this.router.navigate(['listetudiant'])
        }
       )   

  }
 
 

}
