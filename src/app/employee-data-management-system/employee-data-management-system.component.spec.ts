import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataManagementSystemComponent } from './employee-data-management-system.component';

describe('EmployeeDataManagementSystemComponent', () => {
  let component: EmployeeDataManagementSystemComponent;
  let fixture: ComponentFixture<EmployeeDataManagementSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDataManagementSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDataManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
