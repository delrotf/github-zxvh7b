import { Component, OnInit } from "@angular/core";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-projects-md",
  templateUrl: "./projects-md.component.html",
  styleUrls: ["./projects-md.component.css"]
})
export class ProjectsMdComponent implements OnInit {
  faCalendarCheck = faCalendarCheck;

  constructor() {}

  ngOnInit() {}
}
