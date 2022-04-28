import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = "../data/mockdata.json";
  constructor(
    private http: HttpClient
  ) { }

  getMockdata(): Observable<HttpResponse<any>> {
    return this.http.get(this.apiUrl, { observe: 'response'} );
  }
}
