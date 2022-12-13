import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EtudiantServiceService } from 'src/app/service/etudiant-service.service';

@Component({
  selector: 'app-delete-etudiant',
  templateUrl: './delete-etudiant.component.html',
  styleUrls: ['./delete-etudiant.component.css']
})
export class DeleteEtudiantComponent implements OnInit {
id:any
  constructor(private etudiantservice:EtudiantServiceService, private acR:ActivatedRoute,  private router: Router) { }

  ngOnInit(): void { 
  

  }
  
  }
 

