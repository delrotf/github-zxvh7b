import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaimComponent } from './glaim.component';

describe('GlaimComponent', () => {
  let component: GlaimComponent;
  let fixture: ComponentFixture<GlaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
