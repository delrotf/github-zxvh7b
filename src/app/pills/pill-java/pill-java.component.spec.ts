import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillJavaComponent } from './pill-java.component';

describe('PillJavaComponent', () => {
  let component: PillJavaComponent;
  let fixture: ComponentFixture<PillJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
