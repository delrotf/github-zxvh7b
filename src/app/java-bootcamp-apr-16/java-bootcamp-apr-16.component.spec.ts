import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaBootcampApr16Component } from './java-bootcamp-apr-16.component';

describe('JavaBootcampApr16Component', () => {
  let component: JavaBootcampApr16Component;
  let fixture: ComponentFixture<JavaBootcampApr16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaBootcampApr16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaBootcampApr16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
