import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/Etudiant';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

  constructor(private http:HttpClient) { }

  addEtudiantS(etudiant:any){
  return this.http.post("http://localhost:8087/EtudiantC/addEtudiant",etudiant)
  
  }
 
  deleteEtudiants(id:Number){
      return this.http.delete("http://localhost:8087/EtudiantC/delete/"+id) ; 
  }

  
  getAllEtudiant() {
    return this.http.get("http://localhost:8087/EtudiantC/allEtudiant") ;
  }
  deleteAllEtudiant():Observable<any>{
    return this.http.delete("http://localhost:8087/EtudiantC/deletAllEtudiant") ; 
  }
  updateAllEtudiant(etudiant:any , id:Number){
    return this.http.put("http://localhost:8087/EtudiantC/updateEtudiant/"+id,etudiant )

  }
  getEtudById(id:any):Observable<Etudiant>{
    return this.http.get<Etudiant>("http://localhost:8087/EtudiantC/GetById/"+id)
  }
 
}
