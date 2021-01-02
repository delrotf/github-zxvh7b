import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalgreensAisComponent } from './walgreens-ais.component';

describe('WalgreensAisComponent', () => {
  let component: WalgreensAisComponent;
  let fixture: ComponentFixture<WalgreensAisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalgreensAisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalgreensAisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
