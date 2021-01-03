import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillNodeJsComponent } from './pill-node-js.component';

describe('PillNodeJsComponent', () => {
  let component: PillNodeJsComponent;
  let fixture: ComponentFixture<PillNodeJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillNodeJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillNodeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
