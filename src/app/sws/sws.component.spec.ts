import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwsComponent } from './sws.component';

describe('SwsComponent', () => {
  let component: SwsComponent;
  let fixture: ComponentFixture<SwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
