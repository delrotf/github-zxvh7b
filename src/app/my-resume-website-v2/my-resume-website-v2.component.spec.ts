import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResumeWebsiteV2Component } from './my-resume-website-v2.component';

describe('MyResumeWebsiteV2Component', () => {
  let component: MyResumeWebsiteV2Component;
  let fixture: ComponentFixture<MyResumeWebsiteV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyResumeWebsiteV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResumeWebsiteV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
