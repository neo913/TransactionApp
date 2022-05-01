import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TransactionListComponent } from './transaction/transaction-list.component';
import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';
import { AdditionalComponent } from './additional/additional.component';
import { ErrorComponent } from './error/error.component';
import { InterceptorService } from 'src/services/interceptor.service';
import { AdditionalDetailsComponent } from './additional/additional-details/additional-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequirementsComponent,
    TransactionListComponent,
    TransactionDetailsComponent,
    AdditionalComponent,
    ErrorComponent,
    AdditionalDetailsComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
