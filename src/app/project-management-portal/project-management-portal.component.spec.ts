import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementPortalComponent } from './project-management-portal.component';

describe('ProjectManagementPortalComponent', () => {
  let component: ProjectManagementPortalComponent;
  let fixture: ComponentFixture<ProjectManagementPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagementPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagementPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
