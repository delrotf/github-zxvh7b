import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsNodeJsComponent } from './pills-node-js.component';

describe('PillsNodeJsComponent', () => {
  let component: PillsNodeJsComponent;
  let fixture: ComponentFixture<PillsNodeJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsNodeJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsNodeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
