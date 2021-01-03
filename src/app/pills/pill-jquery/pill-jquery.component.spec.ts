import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillJqueryComponent } from './pill-jquery.component';

describe('PillJqueryComponent', () => {
  let component: PillJqueryComponent;
  let fixture: ComponentFixture<PillJqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillJqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
