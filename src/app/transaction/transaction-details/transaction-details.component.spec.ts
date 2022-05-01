import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, getTestBed, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TransactionDetailsComponent } from './transaction-details.component';
import { Router } from '@angular/router';

describe('TransactionDetailsComponent', () => {
  let component: TransactionDetailsComponent;
  let fixture: ComponentFixture<TransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule
      ],
      declarations: [ TransactionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go back', fakeAsync(() => {
    let router = getTestBed().get(Router);

    component.goBack();
    expect(router.url).toEqual('/');
  }));

  it('numbers should invalid', () => {
    let comments = component.transactionDetailsEditForm.controls['comments'];
    comments.setValue("123");
    expect(comments.errors!['pattern']).not.toBeNull();
  });

});
