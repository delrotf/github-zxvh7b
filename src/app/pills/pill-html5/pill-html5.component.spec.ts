import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillHtml5Component } from './pills-html5.component';

describe('PillHtml5Component', () => {
  let component: PillHtml5Component;
  let fixture: ComponentFixture<PillHtml5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillHtml5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillHtml5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
