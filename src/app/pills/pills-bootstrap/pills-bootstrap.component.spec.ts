import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsBootstrapComponent } from './pills-bootstrap.component';

describe('PillsBootstrapComponent', () => {
  let component: PillsBootstrapComponent;
  let fixture: ComponentFixture<PillsBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
