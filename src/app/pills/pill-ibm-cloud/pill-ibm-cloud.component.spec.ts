import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsIbmCloudComponent } from './pills-ibm-cloud.component';

describe('PillsIbmCloudComponent', () => {
  let component: PillsIbmCloudComponent;
  let fixture: ComponentFixture<PillsIbmCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsIbmCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsIbmCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
