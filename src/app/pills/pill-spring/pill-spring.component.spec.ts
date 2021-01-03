import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillSpringComponent } from './pill-spring.component';

describe('PillSpringComponent', () => {
  let component: PillSpringComponent;
  let fixture: ComponentFixture<PillSpringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillSpringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
