import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsSpringComponent } from './pills-spring.component';

describe('PillsSpringComponent', () => {
  let component: PillsSpringComponent;
  let fixture: ComponentFixture<PillsSpringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsSpringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
