import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillAzureComponent } from './pill-azure.component';

describe('PillAzureComponent', () => {
  let component: PillAzureComponent;
  let fixture: ComponentFixture<PillAzureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillAzureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
