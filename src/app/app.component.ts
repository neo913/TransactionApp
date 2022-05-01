import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TransactionApp';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.setMockData();  // to use localStorage
  }

}
