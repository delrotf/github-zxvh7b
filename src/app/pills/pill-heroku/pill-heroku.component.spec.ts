import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillHerokuComponent } from './pill-heroku.component';

describe('PillHerokuComponent', () => {
  let component: PillHerokuComponent;
  let fixture: ComponentFixture<PillHerokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillHerokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillHerokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
