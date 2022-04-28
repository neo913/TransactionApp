import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/data/transactionModel';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'date', 'comments'];

  public transactionDetailsEditForm = new FormGroup({
    comments: new FormControl('')
  });

  public transactionItems: Transaction[] = new Array<Transaction>();
  public selectedId: number = -1;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.transactionItems = new Array<Transaction>();
    this.route.params.subscribe(params => {
      this.selectedId = Number(params['id']);
      this.appService.getDataById(this.selectedId).subscribe((data: any) => {
        this.transactionItems = new Array<Transaction>();
        this.transactionItems.push(new Transaction(data));
      });
    });
  }

  goBack() {
    this.location.back();
  }
  
  updateTransaction() {
    this.appService.updateItem(this.transactionItems.find(item => item.id === this.selectedId));
    // this.location.back();
  }

}
