import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpSkillingTrainingComponent } from './up-skilling-training.component';

describe('UpSkillingTrainingComponent', () => {
  let component: UpSkillingTrainingComponent;
  let fixture: ComponentFixture<UpSkillingTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpSkillingTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpSkillingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
