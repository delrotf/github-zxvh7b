import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-management-portal',
  templateUrl: './project-management-portal.component.html',
  styleUrls: ['./project-management-portal.component.css'],
})
export class ProjectManagementPortalComponent implements OnInit {
  url: string;

  constructor() {}

  ngOnInit() {
    this.url = 'https://project-management-portal.herokuapp.com/';
  }
}
