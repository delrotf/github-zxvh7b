import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mscm34Component } from './mscm-3-4.component';

describe('Mscm34Component', () => {
  let component: Mscm34Component;
  let fixture: ComponentFixture<Mscm34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mscm34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mscm34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
