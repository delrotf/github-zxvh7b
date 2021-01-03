import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PillsAngularComponent } from "./pill-angular.component";

describe("PillAngularComponent", () => {
  let component: PillAngularComponent;
  let fixture: ComponentFixture<PillsAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PillsAngularComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
