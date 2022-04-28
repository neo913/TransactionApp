import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Transaction } from 'src/data/transactionModel';

const API_URL = "../data/mockdata.json";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getMockdata(): Observable<HttpResponse<any>> {
    return this.http.get(API_URL, { observe: 'response'} );
  }

  getAllData(): Observable<HttpResponse<any>> {
    return this.http.get(API_URL, { observe: 'response'} );
  }

  getDataById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(API_URL, { observe: 'response'} ).pipe(map(res => {
      return (res.body as Array<any>).find(item => item.id === id);
    }));
  }

  updateItem(item: any) {
  }
}
