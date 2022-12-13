import { Injectable } from '@angular/core';
import { FormBuilder, UntypedFormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

import { HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  public dataForm:  UntypedFormGroup; 
  choixmenu : string  = 'A';
 
  baseUrl= 'http://localhost:8088'
  constructor(private http: HttpClient) { }
 
  public AddEquipe(equipe:any){
    return this.http.post("http://localhost:8087/equipe/addEq",equipe);
  }
  getAllEquipe():Observable<any>{
    return this.http.get("http://localhost:8087/equipe/listeEquope")
  }
  getEquipe(idEquipe:any) {
    return this.http.get("http://localhost:8087/equipe/getById/"+ idEquipe);
  }
  getAllEquipeByPagination(params:any):Observable<any>{
    return this.http.get("http://localhost:8087/equipe/paging",{params})
  }

  public deleteEquipe(idEquipe:any ){
    return this.http.delete("http://localhost:8087/equipe/deleteE/"+idEquipe);
  }
  editEquipee(d:any,idEquipe:any ){
    return this.http.put('http://localhost:8087/equipe/editEq/'+idEquipe,d)
  }
  exportEquipe(){
    return this.http.get("http://localhost:8087/equipe/export/pdf",{responseType:'blob'});
  }
  exportEquipeexcel(){
    return this.http.get("http://localhost:8087/equipe/excel",{responseType:'blob'});
  }
  getData(idEquipe: number): Observable<Object> {
    return this.http.get("http://localhost:8087/equipe/getById/"+ idEquipe);
  }
 
  createData(formData: FormData): Observable<any> {
    return this.http.post("http://localhost:8087/equipe/addEq",formData);
  }
  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
   updatedata(idEquipe: number, value: any): Observable<Object> {
    return this.http.put('http://localhost:8087/equipe/editEq/'+idEquipe, value);
  }
public getEquipeByNom(nomEquipe:any){
    return this.http.get("http://localhost:8087/equipe/find/"+nomEquipe);
  }

  }


