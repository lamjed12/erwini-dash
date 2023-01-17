import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { passeCertif } from '../model/passeCertif';

@Injectable({
  providedIn: 'root'
})
export class PasseCertifService {

  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getpasseCertif(): Observable<passeCertif[]> {
    return this.http.get<passeCertif[]>("http://localhost:8080/api/passeCertifs");
  }

  public addpasseCertif(claim: any): Observable<any> {
    return this.http.post<passeCertif>("http://localhost:8080/api/create/passeCertif", claim);
  }

  public updatepasseCertif(claim: passeCertif): Observable<passeCertif> {
    console.log(claim)
    return this.http.put<passeCertif>(`http://localhost:8080/api/passeCertif/${claim._id} `,claim);
  }
  public deletepasseCertif(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/passeCertif/${claimId}`,);
  }
}
