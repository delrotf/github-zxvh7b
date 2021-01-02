import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalGridSupportComponent } from './national-grid-support.component';

describe('NationalGridSupportComponent', () => {
  let component: NationalGridSupportComponent;
  let fixture: ComponentFixture<NationalGridSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalGridSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalGridSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
