import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getMockdata().subscribe(res => {
      console.log(res.body);
    })
  }

}
