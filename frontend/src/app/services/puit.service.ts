
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { puit } from '../model/puit';
@Injectable({
  providedIn: 'root'
})
export class puitService {
  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getpuit (): Observable<puit[]> {
    return this.http.get<puit[]>("http://localhost:8080/api/puits");
  }

  public addpuit(claim: any): Observable<any> {
    return this.http.post<puit>("http://localhost:8080/api/create/puits", claim);
  }

  public updatepuit(claim: puit): Observable<puit> {
    console.log(claim)
    return this.http.put<puit>(`http://localhost:8080/api/puits/${claim._id}`,claim);
  }
  public deletepuit(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/puits/${claimId}`,);
  }
  
}
