import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillJsComponent } from './pill-js.component';

describe('PillJsComponent', () => {
  let component: PillJsComponent;
  let fixture: ComponentFixture<PillJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
