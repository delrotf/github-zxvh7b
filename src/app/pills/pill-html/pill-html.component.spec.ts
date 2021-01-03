import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsHtmlComponent } from './pills-html.component';

describe('PillsHtmlComponent', () => {
  let component: PillsHtmlComponent;
  let fixture: ComponentFixture<PillsHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
