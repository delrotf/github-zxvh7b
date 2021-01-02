import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsPhpComponent } from './pills-php.component';

describe('PillsPhpComponent', () => {
  let component: PillsPhpComponent;
  let fixture: ComponentFixture<PillsPhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsPhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
