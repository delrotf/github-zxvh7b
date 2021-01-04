import { Component, OnInit } from "@angular/core";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  faAddressCard = faAddressCard;

  constructor() {}

  ngOnInit() {}
}
