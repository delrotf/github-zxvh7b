import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillIbmCloudComponent } from './pill-ibm-cloud.component';

describe('PillIbmCloudComponent', () => {
  let component: PillIbmCloudComponent;
  let fixture: ComponentFixture<PillIbmCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillIbmCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillIbmCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
