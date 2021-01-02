import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerLoanSystemComponent } from './consumer-loan-system.component';

describe('ConsumerLoanSystemComponent', () => {
  let component: ConsumerLoanSystemComponent;
  let fixture: ComponentFixture<ConsumerLoanSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerLoanSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerLoanSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
