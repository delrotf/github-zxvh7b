import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillFirebaseComponent } from './pill-firebase.component';

describe('PillFirebaseComponent', () => {
  let component: PillFirebaseComponent;
  let fixture: ComponentFixture<PillFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
