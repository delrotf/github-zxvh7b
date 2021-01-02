import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsAngularComponent } from './pills-angular.component';

describe('PillsAngularComponent', () => {
  let component: PillsAngularComponent;
  let fixture: ComponentFixture<PillsAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
