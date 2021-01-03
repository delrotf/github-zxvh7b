import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  yearsOfExperience: number;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.yearsOfExperience = environment.yearsOfExperience;
  }

  open(content) {
    this.modalService.open(content);
  }
}
