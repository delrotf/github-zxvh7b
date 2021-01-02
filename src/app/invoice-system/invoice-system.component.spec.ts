import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSystemComponent } from './invoice-system.component';

describe('InvoiceSystemComponent', () => {
  let component: InvoiceSystemComponent;
  let fixture: ComponentFixture<InvoiceSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
