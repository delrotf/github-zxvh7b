import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillCssComponent } from './pill-css.component';

describe('PillCssComponent', () => {
  let component: PillCssComponent;
  let fixture: ComponentFixture<PillCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
