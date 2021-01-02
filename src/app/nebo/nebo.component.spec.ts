import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeboComponent } from './nebo.component';

describe('NeboComponent', () => {
  let component: NeboComponent;
  let fixture: ComponentFixture<NeboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
