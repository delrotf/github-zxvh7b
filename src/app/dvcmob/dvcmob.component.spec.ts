import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvcmobComponent } from './dvcmob.component';

describe('DvcmobComponent', () => {
  let component: DvcmobComponent;
  let fixture: ComponentFixture<DvcmobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvcmobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvcmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
