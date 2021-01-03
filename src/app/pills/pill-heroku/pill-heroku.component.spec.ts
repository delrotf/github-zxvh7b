import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsHerokuComponent } from './pills-heroku.component';

describe('PillsHerokuComponent', () => {
  let component: PillsHerokuComponent;
  let fixture: ComponentFixture<PillsHerokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsHerokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsHerokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
