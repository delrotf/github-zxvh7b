import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OimMigrationComponent } from './oim-migration.component';

describe('OimMigrationComponent', () => {
  let component: OimMigrationComponent;
  let fixture: ComponentFixture<OimMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OimMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OimMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
