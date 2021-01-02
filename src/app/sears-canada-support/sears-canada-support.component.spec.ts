import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearsCanadaSupportComponent } from './sears-canada-support.component';

describe('SearsCanadaSupportComponent', () => {
  let component: SearsCanadaSupportComponent;
  let fixture: ComponentFixture<SearsCanadaSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearsCanadaSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearsCanadaSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
