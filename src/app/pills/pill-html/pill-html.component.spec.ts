import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillHtmlComponent } from './pill-html.component';

describe('PillHtmlComponent', () => {
  let component: PillHtmlComponent;
  let fixture: ComponentFixture<PillHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
