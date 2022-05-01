import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Transaction } from 'src/app/model/transactionModel';

const MOCK_API_URL = "/data/mockdata.json";
const FAKE_API_URL = "/api/transactions"; // running on localhost:3000 by running "node fakeapi.ts"

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   * GET all data From JSON File(/data/mockdata.json)
   */
  getAllData(): Observable<HttpResponse<any>> {
    return this.http.get(MOCK_API_URL, { observe: 'response'} );
  }

  /**
   * 
   * @param id number
   * GET teh data From JSON File(/data/mockdata.json)
   */
  getDataById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(MOCK_API_URL, { observe: 'response'} ).pipe(map(res => {
      return (res.body as Array<any>).find(item => item.id === id);
    }));
  }

  /**
   * SET the data into localStorage
   */
  setMockData() {
    this.getAllData().subscribe(data => {
      return window.localStorage.setItem("data", JSON.stringify(data.body));
    });
  }

  /**
   * GET all data from localStorage
   * @returns all data from localStorage
   */
  getMockData(): Observable<any> {
    return new Observable(observer => {
      let data = window.localStorage.getItem("data");
      if(data) {
        data = JSON.parse(data);
      } else {
        this.setMockData();
        data = window.localStorage.getItem("data");
        if(data) {
          data = JSON.parse(data);
        }
      }
      observer.next(data);
    });
  }

  /**
   * 
   * @param id number
   * GET the data from localStorage
   */
  getMockDataById(id: number): Observable<any> {
    return new Observable(observer => {
      let data, target; // init
      data = window.localStorage.getItem("data");
      if(data) {
        data = JSON.parse(data);
        target = data.find((item:any) => item.id === id);
      }
      observer.next(target);
    });
  }

  /**
   * 
   * @param id number
   * @param comments string
   * update Comments property using locationStorage
   */
  updateComments(id: number, comments: string) {
    let data = window.localStorage.getItem("data");
    let newData;
    try {
      if(data) {
        newData = JSON.parse(data);
        newData.find((item:any) => item.id === id).comments = comments;
        window.localStorage.setItem("data", JSON.stringify(newData));
      }
    } catch(e) {
      console.error('Could not update: ', e);
    }
  }

  /**
   * 
   * @returns All data from localhost:8080
   */
  getAllFakeAPI(): Observable<Transaction[]> {
    return this.http.get(FAKE_API_URL, { observe: 'response' } ).pipe(map(res => {
      let transactions = new Array<Transaction>();
      (res.body as Array<any>).map(item => {
        transactions.push(new Transaction(item));
      });
      return transactions;
    }));

  }

  /**
   * 
   * @param id number
   * @returns Selected data from localhost:8080
   */
  getFakeAPIById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(FAKE_API_URL, { observe: 'response'} ).pipe(map(res => {
      return (res.body as Array<any>).find(item => item.id === id);
    }));
  }

  /**
   * 
   * @param id number
   * @param comments string
   */
  updateFakeAPI(id:number, comments: string) {

  }

}
