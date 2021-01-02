import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsJsComponent } from './pills-js.component';

describe('PillsJsComponent', () => {
  let component: PillsJsComponent;
  let fixture: ComponentFixture<PillsJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
