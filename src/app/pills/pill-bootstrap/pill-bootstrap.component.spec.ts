import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillBootstrapComponent } from './pill-bootstrap.component';

describe('PillBootstrapComponent', () => {
  let component: PillBootstrapComponent;
  let fixture: ComponentFixture<PillBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
