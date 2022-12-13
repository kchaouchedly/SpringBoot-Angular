import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementServiceService } from 'src/app/Service/departement-service.service';

@Component({
  selector: 'app-remove-departement',
  templateUrl: './remove-departement.component.html',
  styleUrls: ['./remove-departement.component.css']
})
export class RemoveDepartementComponent implements OnInit {

 
  id:any;
  constructor(private departementservice: DepartementServiceService,private acR:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
   
  }
  }


