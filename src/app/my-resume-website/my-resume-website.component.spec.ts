import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResumeWebsiteComponent } from './my-resume-website.component';

describe('MyResumeWebsiteComponent', () => {
  let component: MyResumeWebsiteComponent;
  let fixture: ComponentFixture<MyResumeWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyResumeWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResumeWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
