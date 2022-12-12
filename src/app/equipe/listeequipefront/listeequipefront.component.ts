import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/equipe.service';

@Component({
  selector: 'app-listeequipefront',
  templateUrl: './listeequipefront.component.html',
  styleUrls: ['./listeequipefront.component.css']
})
export class ListeequipefrontComponent implements OnInit {
  listeequipes:any = [];
  constructor(private serrrvice :EquipeService) { }

  ngOnInit(): void {
    this.getAlldetailEquipe();
    
  }
  getAlldetailEquipe(){
    this.serrrvice.getAllEquipe().subscribe(data=> 
      
      {console.log(data);
        this.listeequipes.push(...data);},
    error =>console.log(error)
    )
  }

}
