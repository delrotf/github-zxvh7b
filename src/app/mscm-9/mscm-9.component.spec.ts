import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mscm9Component } from './mscm-9.component';

describe('Mscm9Component', () => {
  let component: Mscm9Component;
  let fixture: ComponentFixture<Mscm9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mscm9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mscm9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
