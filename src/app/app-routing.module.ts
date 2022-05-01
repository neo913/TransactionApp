import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalComponent } from './additional/additional.component';
import { ErrorComponent } from './error/error.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';
import { TransactionListComponent } from './transaction/transaction-list.component';

const routes: Routes = [
  { path: "", component: TransactionListComponent },
  { path: "requirements", component: RequirementsComponent },
  { path: "transaction", component: TransactionListComponent },
  { path: "transaction/:id", component: TransactionDetailsComponent },
  { path: "additional", component: AdditionalComponent },
  { path: "error", component: ErrorComponent },
  { path: "error/:code", component: ErrorComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
