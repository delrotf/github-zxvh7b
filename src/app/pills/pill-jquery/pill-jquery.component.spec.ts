import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsJqueryComponent } from './pills-jquery.component';

describe('PillsJqueryComponent', () => {
  let component: PillsJqueryComponent;
  let fixture: ComponentFixture<PillsJqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsJqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
