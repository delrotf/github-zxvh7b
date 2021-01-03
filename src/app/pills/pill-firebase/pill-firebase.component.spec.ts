import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsFirebaseComponent } from './pills-firebase.component';

describe('PillsFirebaseComponent', () => {
  let component: PillsFirebaseComponent;
  let fixture: ComponentFixture<PillsFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
