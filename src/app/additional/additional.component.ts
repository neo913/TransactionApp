import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { Transaction } from '../model/transactionModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  public transactions$: Observable<Transaction[]> = new Observable<Transaction[]>();
  public unsubscriber$: Subject<void> = new Subject();

  public selectedDetail: Transaction | undefined;

  public keyList: any;
  
  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.transactions$ = this.appService.getAllFakeAPI()
    this.transactions$.pipe(takeUntil(this.unsubscriber$)).subscribe(data => {
      this.keyList = Object.keys(data[0]);  // setting column names using data
      this.keyList.push("action");
    });
    this.selectedDetail = undefined;
  }

  viewDetails(item: Transaction) {
    this.selectedDetail = item;
    this.router.navigate(['/additional/' + item.id], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
