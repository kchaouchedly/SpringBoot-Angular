import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Foyer } from './foyer';


@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  constructor(private http : HttpClient) { }

  getAllFoyer () {
    return this.http.get<Foyer []>("http://localhost:8008/springMvc/FoyerC/Affichefoyer") ;
  }

  updateFoyer(foyer: any ) {
    return this.http.put('http://localhost:8008/springMvc/FoyerC/updateFoyer',foyer);
  }

  getFoyerById(Idfoyer:any):Observable<Foyer[]>{
    return this.http.get<Foyer []>("http://localhost:8008/springMvc/FoyerC/{{id}}" + Idfoyer)
  }

  deleteFoyer(Idfoyer:any){
    return this.http.delete("DELETE http://localhost:8008/springMvc/FoyerC/deleteFoyer/{{Idfoyer}}",Idfoyer)
  }
  addFoyer(foyer: any ) {
    return this.http.post('http://localhost:8008/springMvc/FoyerC/addfoyer',foyer);}

}
