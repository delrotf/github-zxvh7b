import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillCss3Component } from './pill-css3.component';

describe('PillCss3Component', () => {
  let component: PillCss3Component;
  let fixture: ComponentFixture<PillCss3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillCss3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillCss3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
