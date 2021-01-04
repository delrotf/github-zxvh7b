import { Component, OnInit } from "@angular/core";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  faGraduationCap = faGraduationCap;

  constructor() {}

  ngOnInit() {}
}
