import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsHtml5Component } from './pills-html5.component';

describe('PillsHtml5Component', () => {
  let component: PillsHtml5Component;
  let fixture: ComponentFixture<PillsHtml5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsHtml5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsHtml5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
