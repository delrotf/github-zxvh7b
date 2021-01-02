import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpcnetComponent } from './ipcnet.component';

describe('IpcnetComponent', () => {
  let component: IpcnetComponent;
  let fixture: ComponentFixture<IpcnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpcnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpcnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
