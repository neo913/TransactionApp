import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/model/transactionModel';
import { AppService } from 'src/services/app.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'date', 'comments'];

  public transactionDetailsEditForm = new FormGroup({
    comments: new FormControl('', Validators.pattern('^[A-Za-z ]+$'))
  });

  public transactionItems: Transaction[] = new Array<Transaction>();
  public selectedId: number = -1;

  public unsubscriber$: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.transactionItems = new Array<Transaction>();
    this.route.params.subscribe(params => {
      this.selectedId = Number(params['id']);
      
      /** deprecated since this cannot update data. */ 
      // this.appService.getDataById(this.selectedId).pipe(takeUntil(this.unsubscriber$)).subscribe((data: any) => {
      //   this.transactionItems = new Array<Transaction>();
      //   this.transactionItems.push(new Transaction(data));
      // });
      this.appService.getMockDataById(this.selectedId).pipe(takeUntil(this.unsubscriber$)).subscribe((data: any) => {
        this.transactionItems = new Array<Transaction>();
        this.transactionItems.push(new Transaction(data));
      });
    });
  }

  goBack() {
    this.location.back();
  }
  
  updateTransaction() {
    if(this.transactionDetailsEditForm.invalid) return;
    this.appService.updateComments(this.selectedId, this.transactionDetailsEditForm.value.comments);
    this.location.back();
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
