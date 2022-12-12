import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailequipeService {


  constructor(private http: HttpClient) { }
 

  getAllDetailEquipe():Observable<any> {
    return this.http.get("http://localhost:8080/detailequipe/listeDEquipe")
  }

  public AdddEquipe(detailequipe:any){
    return this.http.post("http://localhost:8080/detailequipe/adddetailEquipe",detailequipe);
  }
  public deletedetailEquipe(idDetailEquipe:any ):Observable<any>{
    return this.http.delete("http://localhost:8080/detailequipe/deleteE/"+idDetailEquipe);
  }
  editdetailEquipee(data:any,idDetailEquipe:any){
    return this.http.put('http://localhost:8080/detailequipe/editDEq/'+idDetailEquipe,data)
  }

  getoneDetailEquipe(idDetailEquipe:any) {
    return this.http.get("http://localhost:8080/detailequipe/retrieveDEq/"+ idDetailEquipe);
  }
}
