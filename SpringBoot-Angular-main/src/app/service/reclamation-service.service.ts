import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Reclamation } from '../Reclamation/model/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {

  constructor(private http: HttpClient) { }
  
  addreclamation(reclamation:any){
    return this.http.post("http://localhost:8087/ReclamationC/addRec",reclamation)
  }
  getAllreclamation(){
    return this.http.get("http://localhost:8087/ReclamationC/allREC")
  }
  deletereclamation(id:number){
    return this.http.delete("http://localhost:8087/ReclamationC/deletREC/"+id)
      }
 deleteAllreclamation():Observable<any>{
  return this.http.delete("http://localhost:8087/ReclamationC/deletAllREC")

 }

      updateallreclamation(reclamation:any,id:number){
        return this.http.put("http://localhost:8087/ReclamationC/updateREC/"+id,reclamation)
          }
        
          getreclamationById(id:any):Observable<Reclamation>{
        return this.http.get<Reclamation>("http://localhost:8087/ReclamationC/GetById/"+id)
          }
         
}


