
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { certification } from '../model/certification';
@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getCertification (): Observable<certification[]> {
    return this.http.get<certification[]>("http://localhost:8080/api/certifications");
  }

  public addcertification(claim: any): Observable<any> {
    return this.http.post<certification>("http://localhost:8080/api/create/certification", claim);
  }

  public updatecertification(claim: certification): Observable<certification> {
    console.log(claim)
    return this.http.put<certification>(`http://localhost:8080/api/certification/${claim._id}`,claim);
  }
  public deletecertification(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/certification/${claimId}`,);
  }
  
}
