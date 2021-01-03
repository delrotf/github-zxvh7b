import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  yearsOfExperience: number;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.yearsOfExperience = environment.yearsOfExperience;
  }

  open(content) {
    this.modalService.open(content);
  }
}
