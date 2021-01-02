import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndDesignDevTrainingComponent } from './front-end-design-dev-training.component';

describe('FrontEndDesignDevTrainingComponent', () => {
  let component: FrontEndDesignDevTrainingComponent;
  let fixture: ComponentFixture<FrontEndDesignDevTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndDesignDevTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndDesignDevTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
