
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mesure } from '../model/mesure';
@Injectable({
  providedIn: 'root'
})
export class MesureService {
  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getmesure(): Observable<mesure[]> {
    return this.http.get<mesure[]>("http://localhost:8080/api/mesures");
  }

  public getmesureById(id:any): Observable<mesure> {
    return this.http.get<mesure>(`http://localhost:8080/api/mesure/${id}`);
  }

  public addmesure(claim: any): Observable<any> {
    return this.http.post<mesure>("http://localhost:8080/api/create/mesures", claim);
  }

  public updatemesure(claim: mesure): Observable<mesure> {
    console.log(claim)
    return this.http.put<mesure>(`http://localhost:8080/api/mesures/${claim._id}`,claim);
  }
  public deletemesure(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/mesures/${claimId}`,);
  }
  
}
