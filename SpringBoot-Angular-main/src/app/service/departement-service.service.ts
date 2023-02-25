import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

import { Departement } from '../Departement/model/Departement';


@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {
  

  constructor(private http: HttpClient) { }


  adddepartement(departement:any){
    return this.http.post("http://localhost:8087/DepartementC/addDep",departement)
  }
  getAlldepartement(){
    return this.http.get("http://localhost:8087/DepartementC/allDEP")
  }
  deleteDepartement(id:number){
    return this.http.delete("http://localhost:8087/DepartementC/deletDEP/"+id)
      }
 deleteAllDepartements():Observable<any>{
  return this.http.delete("http://localhost:8087/DepartementC/deletAllDEP")

 }

      updatealldepartement(departement:any,id:number){
        return this.http.put("http://localhost:8087/DepartementC/updateDEP/"+id,departement)
          }
        
          getdepartementById(id:any):Observable<Departement>{
        return this.http.get<Departement>("http://localhost:8087/DepartementC/GetById/"+id)
          }
          exportpdf():Observable<any>{
            return this.http.get("http://localhost:8087/DepartementC/export/pdf", { responseType:'blob'})
          }
         
}
