import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';
import { TransactionListComponent } from './transaction/transaction-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "transaction", component: TransactionListComponent },
  { path: "transaction/:id", component: TransactionDetailsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
