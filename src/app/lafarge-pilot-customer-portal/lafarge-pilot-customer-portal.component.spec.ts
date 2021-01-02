import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LafargePilotCustomerPortalComponent } from './lafarge-pilot-customer-portal.component';

describe('LafargePilotCustomerPortalComponent', () => {
  let component: LafargePilotCustomerPortalComponent;
  let fixture: ComponentFixture<LafargePilotCustomerPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LafargePilotCustomerPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LafargePilotCustomerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
