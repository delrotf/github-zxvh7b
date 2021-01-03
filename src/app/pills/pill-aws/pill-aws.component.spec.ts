import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsAwsComponent } from './pills-aws.component';

describe('PillsAwsComponent', () => {
  let component: PillsAwsComponent;
  let fixture: ComponentFixture<PillsAwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsAwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
