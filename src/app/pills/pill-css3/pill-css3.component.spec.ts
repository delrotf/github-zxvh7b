import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsCss3Component } from './pills-css3.component';

describe('PillsCss3Component', () => {
  let component: PillsCss3Component;
  let fixture: ComponentFixture<PillsCss3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsCss3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsCss3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
