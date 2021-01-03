import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsAzureComponent } from './pills-azure.component';

describe('PillsAzureComponent', () => {
  let component: PillsAzureComponent;
  let fixture: ComponentFixture<PillsAzureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsAzureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
