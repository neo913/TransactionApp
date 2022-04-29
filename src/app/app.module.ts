import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TransactionListComponent } from './transaction/transaction-list.component';
import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';
import { AdditionalComponent } from './additional/additional.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequirementsComponent,
    TransactionListComponent,
    TransactionDetailsComponent,
    AdditionalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
