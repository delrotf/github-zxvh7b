import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmCloudAppDevTrainingComponent } from './ibm-cloud-app-dev-training.component';

describe('IbmCloudAppDevTrainingComponent', () => {
  let component: IbmCloudAppDevTrainingComponent;
  let fixture: ComponentFixture<IbmCloudAppDevTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbmCloudAppDevTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmCloudAppDevTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
