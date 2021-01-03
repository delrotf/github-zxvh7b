import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillPhpComponent } from './pill-php.component';

describe('PillPhpComponent', () => {
  let component: PillPhpComponent;
  let fixture: ComponentFixture<PillPhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillPhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
