import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDmComponent } from './web-dm.component';

describe('WebDmComponent', () => {
  let component: WebDmComponent;
  let fixture: ComponentFixture<WebDmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
