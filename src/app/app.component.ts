import { Component, ViewChild, ElementRef } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  faCalendarCheck,
  faUserTie,
  faAddressCard,
  faUser
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  @ViewChild("tabset") tabset: ElementRef;

  faUser = faUser;
  faCalendarCheck = faCalendarCheck;
  faUserTie = faUserTie;
  faAddressCard = faAddressCard;

  constructor() {}

  onTabChange() {
    window.scrollTo(0, this.tabset.nativeElement.offsetTop + 1);
  }
}
