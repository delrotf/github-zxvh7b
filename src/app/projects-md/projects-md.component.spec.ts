import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMdComponent } from './projects-md.component';

describe('ProjectsMdComponent', () => {
  let component: ProjectsMdComponent;
  let fixture: ComponentFixture<ProjectsMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
