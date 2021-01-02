import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesameMenuComponent } from './sesame-menu.component';

describe('SesameMenuComponent', () => {
  let component: SesameMenuComponent;
  let fixture: ComponentFixture<SesameMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesameMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesameMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
