import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaBootcampSep15Component } from './java-bootcamp-sep-15.component';

describe('JavaBootcampSep15Component', () => {
  let component: JavaBootcampSep15Component;
  let fixture: ComponentFixture<JavaBootcampSep15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaBootcampSep15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaBootcampSep15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
