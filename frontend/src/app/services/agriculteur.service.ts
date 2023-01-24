
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { agriculteur } from '../model/agriculteur';
@Injectable({
  providedIn: 'root'
})
export class agriculteurService {
  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getagriculteur (): Observable<agriculteur[]> {
    return this.http.get<agriculteur[]>("http://localhost:8080/api/agriculteurs");
  }

  public addagriculteur(claim: any): Observable<any> {
    return this.http.post<agriculteur>("http://localhost:8080/api/create/agriculteur", claim);
  }

  public updateagriculteur(claim: agriculteur): Observable<agriculteur> {
    console.log(claim)
    return this.http.put<agriculteur>(`http://localhost:8080/api/agriculteur/${claim._id}`,claim);
  }
  public deleteagriculteur(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/agriculteur/${claimId}`,);
  }
  
}
