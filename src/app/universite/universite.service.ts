import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Universite } from './universite';



@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
   


  constructor(  private http : HttpClient) { }

    getAllUniversite () {
      return this.http.get<Universite[]>(" http://localhost:8087/UniversiteC/AfficheUniv") ;

    }
     updateUniv(universite: any ) {
      return this.http.put(' http://localhost:8087/UniversiteC/updateUniversite',universite);
    }

    getUniversiteById(idU:any):Observable<Universite[]>{
      return this.http.get<Universite[]>("http://localhost:8087/UniversiteC/{{id}}" + idU)

    }

    deleteUniversite(idU:any){
      return this.http.delete("http://localhost:8087/UniversiteC/deleteUniversite/"+idU)
    }

    addUniversite(universite:Universite){
      return this.http.post("http://localhost:8087/UniversiteC/adduniversite",universite)
    }

}
