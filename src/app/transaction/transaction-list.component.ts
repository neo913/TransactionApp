import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/data/transactionModel';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  public transactionList: Transaction[] = new Array<Transaction>();
  public displayedColumns: string[] = ['id', 'date', 'comments', 'action'];

  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.appService.getMockdata().subscribe(data => {
      if(data.body.length > 0) {
        this.transactionList = new Array<Transaction>();
        data.body.map((item: any) => {
          this.transactionList.push(new Transaction(item));
        });
      }
    });
  }

  navigate(id: number) {
    this.router.navigate(["/transaction/", id], { relativeTo: this.route });
  }

}
