import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsCssComponent } from './pills-css.component';

describe('PillsCssComponent', () => {
  let component: PillsCssComponent;
  let fixture: ComponentFixture<PillsCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
