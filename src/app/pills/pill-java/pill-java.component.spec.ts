import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsJavaComponent } from './pills-java.component';

describe('PillsJavaComponent', () => {
  let component: PillsJavaComponent;
  let fixture: ComponentFixture<PillsJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
