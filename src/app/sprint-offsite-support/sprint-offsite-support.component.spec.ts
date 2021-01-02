import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintOffsiteSupportComponent } from './sprint-offsite-support.component';

describe('SprintOffsiteSupportComponent', () => {
  let component: SprintOffsiteSupportComponent;
  let fixture: ComponentFixture<SprintOffsiteSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintOffsiteSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintOffsiteSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
