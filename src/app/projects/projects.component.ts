import { Component, OnInit } from "@angular/core";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  faCalendarCheck = faCalendarCheck;

  constructor() {}

  ngOnInit() {}
}
