import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/model/transactionModel';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.scss']
})
export class AdditionalDetailsComponent implements OnInit {

  @Input() public selectedDetail: Transaction | undefined;
  public commentsInputError: boolean = false;

  constructor(
    public appService: AppService
  ) { }

  ngOnInit(): void {
  }

  updateComments(event: string) {
    this.commentsInputError = /\d/g.test(event);
    if(!this.commentsInputError) {
      this.selectedDetail!.set('comments', event);
    }
  }

}
