import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillAwsComponent } from './pill-aws.component';

describe('PillAwsComponent', () => {
  let component: PillAwsComponent;
  let fixture: ComponentFixture<PillAwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillAwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
