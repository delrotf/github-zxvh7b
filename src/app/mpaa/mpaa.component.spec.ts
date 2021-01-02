import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpaaComponent } from './mpaa.component';

describe('MpaaComponent', () => {
  let component: MpaaComponent;
  let fixture: ComponentFixture<MpaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
