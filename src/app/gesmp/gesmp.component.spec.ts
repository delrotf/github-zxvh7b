import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesmpComponent } from './gesmp.component';

describe('GesmpComponent', () => {
  let component: GesmpComponent;
  let fixture: ComponentFixture<GesmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
