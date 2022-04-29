import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/model/transactionModel';
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
    // this.appService.getAllData().subscribe(data => {
    //   if(data.body.length > 0) {
    //     this.transactionList = new Array<Transaction>();
    //     data.body.map((item: any) => {
    //       this.transactionList.push(new Transaction(item));
    //     });
    //   }
    // });
    this.appService.getMockData().subscribe(data => {
      if(data.length > 0) {
        this.transactionList = new Array<Transaction>();
        data.map((item: any) => {
          this.transactionList.push(new Transaction(item));
        });
      }
    });

    this.appService.getAllFakeAPI().subscribe(res => console.log(res.body));
    this.appService.getFakeAPIById(1).subscribe(res => console.log(res));
    
    this.appService.setMockData()
    this.appService.getMockData().subscribe(res => console.log(res));
    this.appService.getMockDataById(1).subscribe(res => console.log(res));
  }

  navigate(id: number) {
    this.router.navigate(["/transaction/", id], { relativeTo: this.route });
  }

}
