import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { Transaction } from '../model/transactionModel';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  public transactions$: Observable<Transaction[]> = new Observable<Transaction[]>();
  public unsubscriber$: Subject<void> = new Subject();
  
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.transactions$ = this.appService.getAllFakeAPI();
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
