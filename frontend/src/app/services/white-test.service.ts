import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { white_test } from '../model/whiteTest';

@Injectable({
  providedIn: 'root'
})
export class WhiteTestService {

  apiServerUrl:"http://localhost:8080" | undefined;
  constructor(private http : HttpClient) { }

  public getwhite_test(): Observable<white_test[]> {
    return this.http.get<white_test[]>("http://localhost:8080/api/whiteTests");
  }

  public addwhite_test(claim: any): Observable<any> {
    return this.http.post<white_test>("http://localhost:8080/api/create/whiteTests", claim);
  }

  public updatewhite_test(claim: white_test): Observable<white_test> {
    console.log(claim)
    return this.http.put<white_test>(`http://localhost:8080/api/whiteTest/${claim._id} `,claim);
  }
  public deletewhite_test(claimId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/whiteTest/${claimId}`,);
  }
}
