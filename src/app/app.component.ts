import { Component, ViewChild, ElementRef } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
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

  constructor(private titleService: Title) {}

  ngOnInit() {
    const updateDate = environment.updateDate;
    const pageTitle = `${updateDate} Resume of Tanny del Rosario`
    this.titleService.setTitle(pageTitle)
  }

  onTabChange() {
    window.scrollTo(0, this.tabset.nativeElement.offsetTop + 1);
  }
}
