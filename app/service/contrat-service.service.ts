import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contrat } from '../models/ModelContrat';
import { map, Observable } from 'rxjs';
import { stat } from '../models/statModel';

@Injectable({
  providedIn: 'root'
})
export class ContratServiceService {

  constructor(private http:HttpClient ) { }

  addContrat(Contrat:any){
    
    return this.http.post("http://localhost:8086/SpringMVC/ContratC/addContrat",Contrat)
  }

  fetchContrat(){
    return this.http.get("http://localhost:8086/SpringMVC/ContratC/allContrat")
  }
  
  deletContrat(id:any){
    return this.http.delete("http://localhost:8086/SpringMVC/ContratC/deletContrat/"+id)
  }
  updateContrat(d:any,id:any){
    return this.http.put("http://localhost:8086/SpringMVC/ContratC/updateContrat/"+id,d)
  }

  getContratById(id:any): Observable<Contrat>{
    return this.http.get<Contrat>("http://localhost:8086/SpringMVC/ContratC/GetById/"+id)
  }
  getchifre(startDate:any,endDate:any){
    return this.http.get("http://localhost:8086/SpringMVC/ContratC/chiffreEntreDateEtDateF/"+startDate+"/"+endDate)

  }
  getnbrcontratV(startDate:any,endDate:any){
    return this.http.get("http://localhost:8086/SpringMVC/ContratC/nbrContratIsArchive/"+startDate+"/"+endDate)
    
  }
  

  fetchEtudiants(){
    return this.http.get("http://localhost:8086/SpringMVC/EtudiantC/allEtudiant")
  }
  affecterCE(c:any , idEtudiant:any){
   return this.http.get("http://localhost:8086/SpringMVC/ContratC/affecterContratEtudiant/"+idEtudiant)
  }
  pdfByIds(id:any){
    //return this.http.get("http://localhost:8086/SpringMVC/ContratC/pdfbyid/"+id)

    var authorization = 'Bearer ' + sessionStorage.getItem("key");
    let headerOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/pdf',
        "Authorization": authorization
        //   'Accept': 'application/octet-stream', // for excel file
    });
    let requestOptions = { headers: headerOptions, responseType: 'blob' as 'blob' };
    this.http.get("http://localhost:8086/SpringMVC/ContratC/pdfbyid/"+id, requestOptions).pipe(map((data: any) => {
        let blob = new Blob([data], {
            type: 'application/pdf' // must match the Accept type
            // type: 'application/octet-stream' // for excel 
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
         link.download = id+'contrat.pdf';
        link.target = '_blank';
        link.click();
        window.URL.revokeObjectURL(link.href);

    })).subscribe((result: any) => {
    });
  }
  pdfList(){

    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get("http://localhost:8086/SpringMVC/ContratC/pdf", { headers: headers, responseType: 'blob' } );
  //  return this.http.get("http://localhost:8086/SpringMVC/ContratC/pdf")
  

  


  }



  PrintPDF() {
    //let url = this.PDF_URL;
    var authorization = 'Bearer ' + sessionStorage.getItem("key");
    let headerOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/pdf',
        "Authorization": authorization
        //   'Accept': 'application/octet-stream', // for excel file
    });
    let requestOptions = { headers: headerOptions, responseType: 'blob' as 'blob' };
    this.http.get("http://localhost:8086/SpringMVC/ContratC/pdf", requestOptions).pipe(map((data: any) => {
        let blob = new Blob([data], {
            type: 'application/pdf' // must match the Accept type
            // type: 'application/octet-stream' // for excel 
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
         link.download = 'ListContrat.pdf';
        link.target = '_blank';
        link.click();
        window.URL.revokeObjectURL(link.href);

    })).subscribe((result: any) => {
    });
}
emailNewContrat(idEtudiant:any, dateD:any,dateF:any ,specialite:any,montant:any){
return this.http.get("http://localhost:8086/SpringMVC/ContratC/sendMailWithAttachment/"+idEtudiant+"/"+dateD+"/"+dateF+"/"+specialite+"/"+montant)
}
stat(): Observable<Array<any>> {
  return this.http.get<any[]>("https://api.npoint.io/0a7a18e692612379613b" , {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })})
}

}
