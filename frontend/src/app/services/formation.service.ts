import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getformation(): Observable<formation[]> {
    return this.http.get<formation[]>("http://localhost:8080/api/formation");
  }

  public addformation(claim: any): Observable<any> {
    return this.http.post<formation>("http://localhost:8080/api/create/formation", claim);
  }

  public updateformation(claim: formation): Observable<formation> {
    console.log(claim)
    return this.http.put<formation>(`http://localhost:8080/api/formation/${claim._id} `,claim);
  }
  public deleteformation(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/formation/${claimId}`,);
  }
}
