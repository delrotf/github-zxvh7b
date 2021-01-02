import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbottLabsSupportComponent } from './abbott-labs-support.component';

describe('AbbottLabsSupportComponent', () => {
  let component: AbbottLabsSupportComponent;
  let fixture: ComponentFixture<AbbottLabsSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbottLabsSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbottLabsSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
