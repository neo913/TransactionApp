import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Transaction } from 'src/app/model/transactionModel';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  public unsubscriber$: Subject<void> = new Subject();
  
  public transactionList: Transaction[] = new Array<Transaction>();
  public displayedColumns: string[] = ['id', 'date', 'comments', 'action'];

  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    /** deprecated since this cannot update data. */ 
    // this.appService.getAllData().pipe(takeUntil(this.unsubscriber$)).subscribe(data => {
    //   if(data.body.length > 0) {
    //     this.transactionList = new Array<Transaction>();
    //     data.body.map((item: any) => {
    //       this.transactionList.push(new Transaction(item));
    //     });
    //   }
    // });

    this.appService.getMockData().pipe(takeUntil(this.unsubscriber$)).subscribe(data => {
      if(data.length > 0) {
        this.transactionList = new Array<Transaction>();
        data.map((item: any) => {
          this.transactionList.push(new Transaction(item));
        });
      }
    });

  }

  navigateTo(id: number) {
    this.router.navigate(["/transaction/", id], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
