import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementVehicleManagementSystemComponent } from './element-vehicle-management-system.component';

describe('ElementVehicleManagementSystemComponent', () => {
  let component: ElementVehicleManagementSystemComponent;
  let fixture: ComponentFixture<ElementVehicleManagementSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementVehicleManagementSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementVehicleManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
